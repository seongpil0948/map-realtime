<script setup lang="ts">
import factory from "./utils/factory";
import useKonva from "./composables/konva";
import useMap from "./composables/map";

const { stageConfig, stageRef, zoomIn } = useKonva();
const { mapAll, mapId, mapImage } = useMap({
  onUpdateMap: () => {
    zoomIn();
  },
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
  left: 10px;
  z-index: 100;
  background-color: white;
}
</style>
