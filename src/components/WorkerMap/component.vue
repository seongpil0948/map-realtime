<script setup lang="ts">
import factory from "./utils/factory";
import useKonva from "./composables/konva";
import useMap from "./composables/map";
import { fetchResources, fetchWorkers } from "../../mock/api";
import {
  GroupConfig,
  ImageConfig,
  WorkerDocRefined,
  WorkerDocument,
} from "../../types";
import { shallowRef } from "vue";
import { thetaToDegree } from "../MapReal/utils";

const { stageConfig, stageRef, zoomIn, getCenter, getStage } = useKonva();
const { mapAll, mapId, mapImage, loadStaticImages, mTool } = useMap({
  onUpdateMap: () => {
    // zoomIn();
  },
});

// const workers = shallowRef<WorkerDocRefined[]>();
const workerImgConfigs = shallowRef<ImageConfig[]>([]);
const workerGroupConfigs = shallowRef<GroupConfig[]>([]);
fetchWorkers().then(async (workers) => {
  const staticImgs = await loadStaticImages();
  // workers.value = resources.Worker.map(refineWorker);
  if (!staticImgs) throw new Error("staticImgs is not loaded");
  else if (!mTool.value) throw new Error("mTool is not loaded");
  for (let i = 0; i < workers.length; i++) {
    const w = workers[i];
    const t = w.type_specific.location.pose2d;
    const o = mTool.value.transformPointM2PX(t);
    if (!o) throw new Error("mTool is not loaded");
    const image =
      w["status"] === "idle"
        ? staticImgs["workerIdle"]
        : staticImgs["workerBusy"];
    const robotLength = w.type_specific.robot_info.length || 0.51;
    const robotWidth = w.type_specific.robot_info.width || 0.73;
    const pathPlanGlobal = w.type_specific.location.path_plan?.global;
    const pathPlanLocal = w.type_specific.location.path_plan?.local;
    const width = Math.round(robotWidth * mTool.value.M2PX);
    const length = Math.round(robotLength * mTool.value.M2PX);
    workerImgConfigs.value.push({
      id: w.id,
      image,
      x: o.x,
      y: o.y,
      rotation: thetaToDegree(t.theta),
      offset: {
        y: width / 2,
        x: length / 2,
      },
      stroke: "orange",
      strokeWidth: 0,
    });
  }
  console.info("workerImgConfigs: ", workerImgConfigs.value);
});
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
    <v-stage ref="stageRef" :config="stageConfig">
      <v-layer>
        <v-image :config="mapImage" />

        <v-image
          v-for="workerConfig in workerImgConfigs"
          :key="workerConfig.id"
          :config="workerConfig"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<style scoped>
#worker-map-root {
  height: 90%;
  widows: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.select-container {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  background-color: white;
}
</style>
