<script setup lang="ts">
import useKonva from "./composables/konva";
import useMap from "./composables/map";
import { fetchResources } from "../../mock/api";
import {
  CircleConfig,
  ImageConfig,
  LineConfig,
  Resources,
  TWorker,
} from "../../types";
import { ref, shallowRef } from "vue";
import { useMqtt } from "./composables/mqtt";
import factory from "./utils/factory";
import MapTools, { isResources, isWorker } from "./utils/map";

const { stageConfig, stageRef, getStage } = useKonva();
const { mapAll, mapId, mapImage, loadStaticImages, mTool } = useMap({});
const infoText = ref<string>("");
const setInfoText = (message: string) => {
  infoText.value = message;
};

const handleMouseMove = (event: MouseEvent) => {
  const stage = getStage();
  const mousePos = stage.getPointerPosition();
  if (!mousePos) return;
  setInfoText(mousePos.x + ", " + mousePos.y);
};

// >>>temp >>>
const pathPlanLocal = shallowRef<CircleConfig[]>([]);
const pathPlanGlobalCircle = shallowRef<CircleConfig[]>([]);
const pathPlanGlobalLine = shallowRef<LineConfig[]>([]);
const workerImgConfigs = shallowRef<ImageConfig[]>([]);

fetchResources().then(async (resources) => {
  const staticImgs = await loadStaticImages();
  // workers.value = resources.Worker.map(refineWorker);
  if (!staticImgs) throw new Error("staticImgs is not loaded");
  else if (!mTool.value) throw new Error("mTool is not loaded");

  for (let i = 0; i < resources.Worker.length; i++) {
    const worker = resources.Worker[i];
    const workerPosition = worker.type_specific.location.pose2d;
    const m2px2DPosition = mTool.value.transformPointM2PX(workerPosition);
    if (!m2px2DPosition) throw new Error("mTool is not loaded");

    const image =
      worker["status"] === "idle"
        ? staticImgs["workerIdle"]
        : staticImgs["workerBusy"];
    const robotLength = worker.type_specific.robot_info.length || 0.51;
    const robotWidth = worker.type_specific.robot_info.width || 0.73;

    const width = Math.round(robotWidth * mTool.value.M2PX);
    const length = Math.round(robotLength * mTool.value.M2PX);

    workerImgConfigs.value.push({
      id: worker.id,
      image,
      x: m2px2DPosition.x,
      y: m2px2DPosition.y,
      rotation: MapTools.thetaToDegree(workerPosition.theta),
      offset: {
        y: width / 2,
        x: length / 2,
      },
      stroke: "orange",
      strokeWidth: 0,
    });

    const randomCircleColor = ["#EEF5FC", "#CEE1F7", "#5194E3"];
    const lineColor = "#C4D9F7";
    const circleColor = "#0069FF";

    pathPlanLocal.value = [];
    const ppl = worker.type_specific.location.path_plan?.local;
    console.info("pathPlanLocal: ", ppl);
    if (ppl) {
      for (let j = 0; j < ppl.length; j++) {
        const p = ppl[j];
        const pos = mTool.value.transformPointM2PX(p);
        const config: CircleConfig = {
          x: pos.x,
          y: pos.y,
          radius: 2,
          fill: circleColor,
          stroke: circleColor,
          strokeWidth: 1,
          opacity: 0.85,
        };
        pathPlanLocal.value.push(config);
      }
    }

    pathPlanGlobalCircle.value = [];
    pathPlanGlobalLine.value = [];
    const ppg = worker.type_specific.location.path_plan?.global;
    console.info("pathPlanGlobal: ", ppg);

    if (ppg) {
      const globalPath: number[] = [];
      for (let i = 0; i < ppg.length; i++) {
        const p = ppg[i];
        const pos = mTool.value.transformPointM2PX(p);
        globalPath.push(pos.x), globalPath.push(pos.y);
      }
      const eachGlobalPath: LineConfig = {
        points: globalPath,
        stroke: lineColor,
        strokeWidth: 4,
        opacity: 0.35,
      };
      pathPlanGlobalLine.value.push(eachGlobalPath);

      const movingGPath = ppg[ppg.length - 1];
      const eachMovingGPointPosition = mTool.value.transformPointM2PX(movingGPath);

      for (let i = 0; i < 3; i++) {
        const eachGlobalPathPoint: CircleConfig = {
          x: eachMovingGPointPosition.x,
          y: eachMovingGPointPosition.y,
          radius: 12 - i * 4,
          fill: randomCircleColor[i],
          opacity: 0.75,
        };
        pathPlanGlobalCircle.value.push(eachGlobalPathPoint);
      }
    }
  }
  console.info("workerImgConfigs: ", workerImgConfigs.value);
  console.info("pathPlan: ", pathPlanLocal.value);
});
// <<< temp <<<

const topics = Object.freeze(["hello", "worker"] as const);
const { ignite } = useMqtt<Resources | TWorker, typeof topics>({
  config: {
    clientId: "client-" + Math.random().toString(16).substring(2, 8),
    host: "192.168.0.101",
    port: 15675,
    username: "admin",
    password: "0525",
  },
  topics,
  onMessage(topic, message) {
    console.log("토픽 `" + topic + "`에서 메시지 수신:", message);
    if (topic === "hello") {
      if (isResources(message)) {
        // setResources(message)
        console.info("리소스당!");
      } else throw new Error("올바르지 않은 메시지 형식입니다");
    } else if (topic === "worker") {
      if (isWorker(message)) {
        // updateWorker(message);
        console.info("워커당!");
      } else throw new Error("올바르지 않은 메시지 형식입니다");
    }
  },
});
const { dispose } = ignite();
</script>
<template>
  <div id="worker-map-root">
    <div class="select-container">
      <select v-model="mapId">
        <option v-for="map in mapAll" :key="map._id" :value="map.id">
          {{ map.name }}
        </option>
      </select>
    </div>
    <v-stage @mousemove="handleMouseMove" ref="stageRef" :config="stageConfig">
      <v-layer>
        <v-image :config="mapImage" />

        <v-image v-for="workerConfig in workerImgConfigs" :key="workerConfig.id" :config="workerConfig" />
        <v-group>
          <v-circle v-for="circleConfig in pathPlanLocal" :key="circleConfig.id" :config="circleConfig" />
        </v-group>
        <v-group>
          <v-circle v-for="circleConfig in pathPlanGlobalCircle" :key="circleConfig.id" :config="circleConfig" />
          <v-line v-for="lineConfig in pathPlanGlobalLine" :key="lineConfig.id" :config="lineConfig" />
          <!-- global -->
          <v-group> </v-group>
        </v-group>
        <v-text :config="{
        ...factory.konva.text(),
        ...{
          x: 10,
          y: 10,
          offsetX: -1000,
          offsetY: -600,
          text: infoText,
        },
      }" />
      </v-layer>
    </v-stage>
  </div>
</template>

<style scoped>
#worker-map-root {
  height: 100%;
  widows: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.select-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
  background-color: white;
}
</style>
