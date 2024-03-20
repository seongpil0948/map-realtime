<script setup lang="ts">
import useKonva from "./composables/konva";
import useMap from "./composables/map";
import { Resources, TWorker } from "../../types";
import { ref } from "vue";
import { useMqtt } from "./composables/mqtt";
import factory from "./utils/factory";
import { isResources, isWorker } from "./utils/map";
import useResources from "./composables/resource";

const { stageConfig, stageRef, getStage, getCenter } = useKonva();
const { mapAll, mapId, mapImage, mTool } = useMap({});
const {
  pathPlanLocal,
  pathPlanGlobalCircle,
  pathPlanGlobalLine,
  workerImgConfigs,
  markerImgConfigs,
} = useResources({ mTool });
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

        <v-image
          v-for="workerConfig in workerImgConfigs"
          :key="workerConfig.id"
          :config="workerConfig"
        />
        <v-image
          v-for="markerImgConfig in markerImgConfigs"
          :key="markerImgConfig.id"
          :config="markerImgConfig"
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
