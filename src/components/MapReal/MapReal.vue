<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from "vue";
import {
  CircleConfig,
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
} = useMap({
  getInitialResources() {
    return Promise.resolve<any>(mockResource);
  },
  stageRef,
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

// >>> temp >>>
const applyActiveWorker = (onWorker: (w: WorkerDocumentActive) => void) => {
  const activeWorkers = resources.value?.Worker.filter(isActiveWorker) ?? [];
  activeWorkers.forEach((w) => onWorker(w as WorkerDocumentActive));
};
const workerToLine = (type: "local" | "global") => {
  const lines: LineConfig[] = [];
  applyActiveWorker((w) => lines.push(makeWorker2Line(w, type, getCenter())));
  return lines;
};
const lineConfigsLocal = computed<LineConfig[]>(() => workerToLine("local"));
const lineConfigsGlobal = computed<LineConfig[]>(() => workerToLine("global"));

const circleConfigs = computed<CircleConfig[]>(() => {
  const configs: CircleConfig[] = [];
  applyActiveWorker((w) => {
    const path = getWorkerGlobalPath(w as WorkerDocumentActive, getCenter());
    for (let j = 0; j < path.length; j++) {
      const p = path[j];
      const c = getDefaultConfig.circle();
      configs.push({ ...c, ...p });
    }
  });
  return configs;
});

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

const tooltipConfig = reactive<TextConfig>(getDefaultConfig.text());
const handleMouseOverCircle = (e: EvtMouseOver) => {
  console.log("handleMouseOverCircle circle: ", e);
  const xy = { x: e.target.x(), y: e.target.y() };
  tooltipConfig.x = xy.x;
  tooltipConfig.y = xy.y;
  tooltipConfig.text = "x: " + xy.x + ", y: " + xy.y;
  for (let i = 0; i < lineConfigsGlobal.value.length; i++) {
    const gc = lineConfigsGlobal.value[i];
    if (!gc.points || gc.points.length < 1) continue;
    if (gc.points[0] === xy.x && gc.points[1] === xy.y) {
      tooltipConfig.text += "\n" + "global start";
    } else if (
      gc.points[gc.points.length - 2] === xy.x &&
      gc.points[gc.points.length - 1] === xy.y
    ) {
      tooltipConfig.text += "\n" + "global end";
    }
  }
};
const handleMouseOutCircle = (e: EvtMouseOut) => {
  // hide tooltip
  tooltipConfig.text = "";
};
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
      <v-image
        v-for="worker in resources?.Worker"
        :key="worker.id"
        :config="{
          image: worker.image,
          x: worker.pose.x,
          y: worker.pose.y,
          rotation: worker.pose.theta,
        }"
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
      <v-text :config="tooltipConfig" />
    </v-layer>
  </v-stage>
</template>
