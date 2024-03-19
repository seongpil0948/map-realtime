<script setup lang="ts">
import useKonva from "./composables/konva";
import useMap from "./composables/map";
import { fetchResources } from "../../mock/api";
import { CircleConfig, ImageConfig, LineConfig } from "../../types";
import { ref, shallowRef } from "vue";
import { thetaToDegree } from "../MapReal/utils";
import { useMqtt } from "./composables/mqtt";
import factory from "./utils/factory";

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
    const w = resources.Worker[i];
    const t = w.type_specific.location.pose2d;
    const o = mTool.value.transformPointM2PX(t);
    if (!o) throw new Error("mTool is not loaded");
    const image =
      w["status"] === "idle"
        ? staticImgs["workerIdle"]
        : staticImgs["workerBusy"];
    const robotLength = w.type_specific.robot_info.length || 0.51;
    const robotWidth = w.type_specific.robot_info.width || 0.73;

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
    const sr = ["#EEF5FC", "#CEE1F7", "#5194E3"];
    const ir = "#C4D9F7";
    const ci = "#0069FF";
    pathPlanLocal.value = [];
    const ppl = w.type_specific.location.path_plan?.local;
    console.info("pathPlanLocal: ", ppl);
    if (ppl) {
      for (let j = 0; j < ppl.length; j++) {
        const p = ppl[j];
        const pos = mTool.value.transformPointM2PX(p);
        const config: CircleConfig = {
          x: pos.x,
          y: pos.y,
          radius: 2,
          fill: ci,
          stroke: ci,
          strokeWidth: 1,
          opacity: 0.85,
        };
        pathPlanLocal.value.push(config);
      }
    }
    pathPlanGlobalCircle.value = [];
    pathPlanGlobalLine.value = [];
    const e = w.type_specific.location.path_plan?.global;
    console.info("pathPlanGlobal: ", e);
    if (e) {
      const t: number[] = [];
      for (let j = 0; j < e.length; j++) {
        const u = e[j];
        const l = mTool.value.transformPointM2PX(u);
        t.push(l.x), t.push(l.y);
      }
      const o: LineConfig = {
        points: t,
        stroke: ir,
        strokeWidth: 4,
        opacity: 0.35,
      };
      pathPlanGlobalLine.value.push(o);

      const a = e[e.length - 1];
      const r = mTool.value.transformPointM2PX(a);

      for (let u2 = 0; u2 < 3; u2++) {
        const l: CircleConfig = {
          x: r.x,
          y: r.y,
          radius: 12 - u2 * 4,
          fill: sr[u2],
          opacity: 0.75,
        };
        pathPlanGlobalCircle.value.push(l);
      }
    }
  }
  console.info("workerImgConfigs: ", workerImgConfigs.value);
  console.info("pathPlan: ", pathPlanLocal.value);
});
// <<< temp <<<
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

        <v-image
          v-for="workerConfig in workerImgConfigs"
          :key="workerConfig.id"
          :config="workerConfig"
        />
        <v-group>
          <v-circle
            v-for="circleConfig in pathPlanLocal"
            :key="circleConfig.id"
            :config="circleConfig"
          />
        </v-group>
        <v-group>
          <v-circle
            v-for="circleConfig in pathPlanGlobalCircle"
            :key="circleConfig.id"
            :config="circleConfig"
          />
          <v-line
            v-for="lineConfig in pathPlanGlobalLine"
            :key="lineConfig.id"
            :config="lineConfig"
          />
          <!-- global -->
          <v-group> </v-group>
        </v-group>
        <v-text
          :config="{
            ...factory.konva.text(),
            ...{
              x: 10,
              y: 10,
              offsetX: -1000,
              offsetY: -600,
              text: infoText,
            },
          }"
        />
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
