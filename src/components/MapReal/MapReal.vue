<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import {
  CircleConfig,
  CleanWorkerDoc,
  EvtMouseOut,
  EvtMouseOver,
  LineConfig,
  PStageConfig,
  Resources,
  TWorker,
  TextConfig,
  WorkerDocumentActive,
} from "./types";
import mockResource from "../../mock/resources";
import maps from "../../mock/maps";
import { extractKonva, makeWorker2Line } from "./konva";
import { Props } from "./props";
import {
  getDefaultConfig,
  getMqttConfig,
  getStageConfig,
  topicsByHost,
} from "./config";
import { MapEvent } from "./events";
import { useMqtt } from "../../composable/mqtt";
import useMap from "./composable/map";
import useMouseWheel from "./composable/wheel";
import useDrag from "./composable/drag";
import {
  getWorkerGlobalPath,
  isActiveWorker,
  isResources,
  isWorker,
} from "./utils";
import Konva from "konva";
import { RectConfig } from "konva/lib/shapes/Rect";

const props = withDefaults(defineProps<Props>(), {
  ...getDefaultConfig.props(),
  canvasStyle: () => getDefaultConfig.props().canvasStyle!,
});
const emit = defineEmits<MapEvent>();

const stageRef = ref<any>(null);
const {
  mapImgRef,
  resources,
  changeEncodedMap,
  encodedMap,
  windowSize,
  mapSize,
  setResources,
  updateWorker,
  getCenter,
  workerTexts,
  workerGroupRef,
} = useMap({
  getInitialResources() {
    return Promise.resolve<any>(mockResource);
  },
  stageRef,
  handleUpdateResources() {
    handleWorkerChanged();
  },
  handleUpdateWorker(w) {
    console.log(
      "resources.value.Worker",
      w.id,
      w.status,
      w.type_specific.location.path_plan
    );
    handleWorkerChanged();
  },
});
const configKonva: PStageConfig = getStageConfig(props, windowSize);
const configResource = getMqttConfig();
const topics = topicsByHost(configResource.host);
const { ignite } = useMqtt<Resources | TWorker, typeof topics>({
  config: configResource,
  topics,
  onMessage(topic, message) {
    console.log("토픽 `" + topic + "`에서 메시지 수신:", message);
    if (topic === "hello") {
      if (isResources(message)) setResources(message);
      else throw new Error("올바르지 않은 메시지 형식입니다");
    } else if (topic === "worker") {
      if (isWorker(message)) updateWorker(message);
      else throw new Error("올바르지 않은 메시지 형식입니다");
    }
  },
});
const { dispose } = ignite();
const { handleWheel } = useMouseWheel(stageRef);

const { handleDragStart, handleDragEnd, handleDrag, handleDragMove } =
  useDrag();

onBeforeUnmount(() => {
  dispose();
});

const lineConfigsLocal = ref<LineConfig[]>([]);
const lineConfigsGlobal = ref<LineConfig[]>([]);
const circleConfigs = ref<CircleConfig[]>([]);
const handleWorkerChanged = () => {
  console.count("handleWorkerChanged");
  const lineLocal: LineConfig[] = [];
  const lineGlobal: LineConfig[] = [];
  const circle: CircleConfig[] = [];
  const activeWorkers = resources.value?.Worker.filter(isActiveWorker) ?? [];
  const centerStage = getCenter();
  for (let i = 0; i < activeWorkers.length; i++) {
    const w = activeWorkers[i] as WorkerDocumentActive;
    const pathGlobal = getWorkerGlobalPath(w, centerStage);
    lineLocal.push(makeWorker2Line(w, "local", centerStage));
    lineGlobal.push(makeWorker2Line(w, "global", centerStage));
    for (let j = 0; j < pathGlobal.length; j++) {
      const p = pathGlobal[j];
      const c = getDefaultConfig.circle();
      circle.push({ ...c, ...p });
    }
  }
  lineConfigsLocal.value = lineLocal;
  lineConfigsGlobal.value = lineGlobal;
  circleConfigs.value = circle;
};

const infoText = ref<string>("");
const setInfoText = (message: string) => {
  infoText.value = message;
};

const handleMouseOut = (event: MouseEvent) => {
  setInfoText("Mouseout map");
};
const handleMouseMove = (event: MouseEvent) => {
  // console.info('Mousemove', event)
  const { stage } = extractKonva(stageRef);
  const mousePos = stage.getPointerPosition();
  if (!mousePos) return;
  emit("update:mouse", { ...mousePos });
  setInfoText(mousePos.x + ", " + mousePos.y);
};

const tootipBgConfig = reactive<RectConfig>(getDefaultConfig.rect());
const tooltipConfig = reactive<TextConfig>(getDefaultConfig.text());

const getTootipSize = (
  config: TextConfig
): { height: number; width: number } => {
  const text = new Konva.Text({
    text: config.text,
  });
  return { height: text.getHeight(), width: text.getWidth() };
};

const handleMouseOverCircle = (e: EvtMouseOver) => {
  console.log("handleMouseOverCircle circle: ", e);
  const xy = { x: e.target.x(), y: e.target.y() };
  tooltipConfig.x = xy.x;
  tooltipConfig.y = xy.y;
  tooltipConfig.text = "x: " + xy.x + ", y: " + xy.y;

  tootipBgConfig.x = xy.x;
  tootipBgConfig.y = xy.y;
  tootipBgConfig.opacity = 0.3;
  tootipBgConfig.width = getTootipSize(tooltipConfig).width;
  tootipBgConfig.height = getTootipSize(tooltipConfig).height + 10;

  for (let i = 0; i < lineConfigsGlobal.value.length; i++) {
    const gc = lineConfigsGlobal.value[i];
    if (!gc.points || gc.points.length < 1) continue;
    if (gc.points[0] === xy.x && gc.points[1] === xy.y) {
      tooltipConfig.text += "\n" + "global start";
      tootipBgConfig.height += 15;
    } else if (
      gc.points[gc.points.length - 2] === xy.x &&
      gc.points[gc.points.length - 1] === xy.y
    ) {
      tooltipConfig.text += "\n" + "global end";
      tootipBgConfig.height += 15;
    }
  }
};

const handleMouseOutCircle = (e: EvtMouseOut) => {
  // hide tooltip
  tooltipConfig.text = "";
  tootipBgConfig.opacity = 0;
};

watch(
  () => resources.value?.Worker,
  () => {
    console.info("Worker changed");
  }
);
</script>

<template>
  <div>
    <select
      v-model="encodedMap"
      name="encodedMap"
      @change="changeEncodedMap(encodedMap)"
    >
      <option v-for="map in maps" :key="map._id" :value="map.id">
        {{ map.name }}
      </option>
    </select>
  </div>
  <v-stage
    ref="stageRef"
    :config="configKonva"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
    @drag="handleDrag"
    @dragmove="handleDragMove"
  >
    <v-layer>
      <v-image
        :config="{
          image: mapImgRef,
          x: mapSize.x,
          y: mapSize.y,
          draggable: false,
        }"
        @mousemove="handleMouseMove"
        @mouseout="handleMouseOut"
        @wheel="handleWheel"
      />
      <v-image
        v-for="location in resources?.Location"
        :key="location.id"
        :config="{
          image: location.image,
          x: location.pose.x,
          y: location.pose.y,
          rotation: location.pose.theta,
        }"
      />
      <v-group
        v-for="worker in resources?.Worker"
        :key="worker.id"
        :config="{
          x: worker.pose.x,
          y: worker.pose.y,
          rotation: worker.pose.theta,
        }"
        ref="workerGroupRef"
      >
        <v-image
          :config="{
            image: worker.image,
            x: 0,
            y: 0,
            width: 30,
            height: 20,
            fill: 'violet',
          }"
        />
      </v-group>
      <v-text
        v-for="(t, idx) in workerTexts"
        :key="`${t.text} ${idx}`"
        :config="t"
        @mouseover="handleMouseOverCircle"
        @mouseout="handleMouseOutCircle"
      />

      <!-- <v-shape ref="shapeRef" :config="shapeConfig" /> -->
      <v-line
        v-for="gc in lineConfigsGlobal"
        :key="`${gc.x},${gc.y},global`"
        :config="gc"
      />
      <v-line
        v-for="lc in lineConfigsLocal"
        :key="`${lc.x},${lc.y},local`"
        :config="lc"
      />
      <!-- FIXME: don't use idx for key -->
      <v-circle
        v-for="(circleConfig, idx) in circleConfigs"
        :key="idx"
        :config="circleConfig"
        @mouseover="handleMouseOverCircle"
        @mouseout="handleMouseOutCircle"
      ></v-circle>

      <v-text
        :config="{
          ...getDefaultConfig.text(),
          ...{
            x: 10,
            y: 10,
            text: infoText,
          },
        }"
      />
      <!-- <v-text :config="tooltipConfig" /> -->
      <v-group>
        <v-rect :config="tootipBgConfig" />
        <v-text :config="tooltipConfig" />
      </v-group>
    </v-layer>
  </v-stage>
</template>
