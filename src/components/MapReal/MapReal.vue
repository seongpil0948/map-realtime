<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { PStageConfig } from './types';

import maps from '../../mock/maps'
import { extractKonva } from './konva';
import { Props } from './props';
import { DEFAULT_CONFIG, getStageConfig } from './config';
import { MapEvent } from './events';
import { useMqtt } from '../../composable/mqtt';
import useMap from './composable/map';
import useMouseMove from './composable/mouse';
import useMouseWheel from './composable/wheel';
import useDrag from './composable/drag';

const props = withDefaults(defineProps<Props>(), {
  ...DEFAULT_CONFIG,
  canvasStyle: () => DEFAULT_CONFIG.canvasStyle!,
})
const emit = defineEmits<MapEvent>()

const {
  mapImgRef,
  locations,
  changeEncodedMap,
  encodedMap,
  windowSize,
  mapSize
} = useMap()
const configKonva: PStageConfig = getStageConfig(props, windowSize)
const stageRef = ref<any>(null)

const { getClient } = useMqtt({
  clientId: 'client-' + Math.random().toString(16).substring(2, 8),
  topic: 'hello',
  host: '192.168.0.101',
  port: 15675,
  username: 'admin',
  password: '0525',
})
const client = getClient()

const {
  handleMouseMove,
  handleMouseOut,
  infoText
} = useMouseMove(stageRef, emit)

const { handleWheel } = useMouseWheel(stageRef)

const {
  handleDragStart,
  handleDragEnd,
  handleDrag
} = useDrag()

onMounted(() => {
  console.info(extractKonva(stageRef))
})

onBeforeUnmount(() => {
  client.dispose()
})


</script>

<template>
  <div>
    <select v-model="encodedMap" name="encodedMap" @change="changeEncodedMap(encodedMap)">
      <option v-for="map in maps" :key="map._id" :value="map.id">{{ map.name }}</option>
    </select>
  </div>
  <v-stage ref="stageRef" :config="configKonva" @dragstart="handleDragStart" @dragend="handleDragEnd"
    @drag="handleDrag">
    <v-layer>
      <v-image :config="{ image: mapImgRef, x: mapSize.x, y: mapSize.y, draggable: false }" @mousemove="handleMouseMove"
        @mouseout="handleMouseOut" @wheel="handleWheel" />
      <v-image v-for="location in locations" :key="(location.x + location.y) * location.theta"
        :config="{ image: location.image, x: location.x, y: location.y }"></v-image>

      <v-text ref="text" :config="{
      x: 10,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 24,
      text: infoText,
      fill: 'black'
    }" />
    </v-layer>
  </v-stage>

</template>
