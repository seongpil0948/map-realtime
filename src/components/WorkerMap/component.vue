<script setup lang="ts">
import useKonva from "./composables/konva";
import useMap from "./composables/map";
import { Resources, TWorker, TextConfig } from "../../types";
import { nextTick, onBeforeUnmount, ref } from "vue";
import { useMqtt } from "./composables/mqtt";
import factory from "./utils/factory";
import { isResources, isWorker } from "./utils/map";
import useResources from "./composables/resource";
import { generateObjectLabel } from "./utils/konva";

const { stageConfig, stageRef, getStage } = useKonva();
const { mapAll, mapId, mapImage, mTool } = useMap({});

const resourceLabels = ref<TextConfig[]>([]);
const updateLabels = () => {
  nextTick(() => {
    const texts: TextConfig[] = [];
    workerGroupRef.value.forEach((worker) => {
      const tConfig = generateObjectLabel({
        konvaEl: worker,
        stageRef,
        place: "top",
        text: (node) => node.attrs.name,
        textConfig: {
          fill: "red",
          fontSize: 12,
          fontStyle: "bold",
        },
      });
      texts.push(tConfig);
    });
    markerGroupRef.value.forEach((marker) => {
      const tConfig = generateObjectLabel({
        konvaEl: marker,
        stageRef,
        place: "bottom",
        text: (node) => node.attrs.name,
        textConfig: {
          offsetX: 20,
        },
      });
      texts.push(tConfig);
    });
    zoneGroupRef.value.forEach((zone) => {
      const tConfig = generateObjectLabel({
        konvaEl: zone,
        stageRef,
        place: "center",
        text: (node) => node.attrs.name,
        textConfig: {
          offsetX: 20,
        },
      });
      texts.push(tConfig);
    });
    console.log("update resource label texts: ", texts);
    resourceLabels.value = texts;
  });
};
const {
  pathPlanLocal,
  pathPlanGlobalCircle,
  pathPlanGlobalLine,
  workerImgConfigs,
  markerImgConfigs,
  locationImgConfigs,
  zoneLineConfigs,
  setResources,
  handleUpdateWorker,
} = useResources({ mTool, onUpdateResources: updateLabels });
const workerGroupRef = ref<unknown[]>([]);
const markerGroupRef = ref<unknown[]>([]);
const zoneGroupRef = ref<unknown[]>([]);

const infoText = ref<string>("");
const setInfoText = (message: string) => {
  infoText.value = message;
};

const handleMouseMove = (_event: MouseEvent) => {
  const stage = getStage();
  const mousePos = stage.getPointerPosition();
  if (!mousePos) return;
  setInfoText(mousePos.x + ", " + mousePos.y);
};

const topics = Object.freeze(["location", "worker"] as const);
const { ignite } = useMqtt<Resources | TWorker, typeof topics>({
  config: {
    clientId: "client-" + Math.random().toString(16).substring(2, 8),
    host: "192.168.0.100",
    port: 15675,
    username: "root",
    password: "password",
  },
  topics,
  onMessage(topic, message) {
    console.log("in onMessage topic: ", topic, "message: ", message);
    if (topic === "location") {
      if (isResources(message)) {
        setResources(message);
      } else throw new Error("올바르지 않은 메시지 형식입니다");
    } else if (topic === "worker") {
      if (isWorker(message)) {
        handleUpdateWorker(message.document);
        updateLabels();
      } else throw new Error("올바르지 않은 메시지 형식입니다");
    }
  },
});

const { dispose } = ignite();
onBeforeUnmount(() => {
  dispose();
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
    <v-stage @mousemove="handleMouseMove" ref="stageRef" :config="stageConfig">
      <v-layer>
        <v-image :config="mapImage" />

        <v-image
          ref="workerGroupRef"
          v-for="workerConfig in workerImgConfigs"
          :key="workerConfig.id"
          :config="workerConfig"
        />
        <v-image
          ref="markerGroupRef"
          v-for="markerImgConfig in markerImgConfigs"
          :key="markerImgConfig.id"
          :config="markerImgConfig"
        />
        <v-image
          v-for="locationImgConfig in locationImgConfigs"
          :key="locationImgConfig.id"
          :config="locationImgConfig"
        />
        <v-line
          ref="zoneGroupRef"
          v-for="zoneLineConfig in zoneLineConfigs"
          :key="zoneLineConfig.id"
          :config="zoneLineConfig"
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
          v-for="(t, idx) in resourceLabels"
          :key="`${t.text} ${idx}`"
          :config="t"
        />
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
