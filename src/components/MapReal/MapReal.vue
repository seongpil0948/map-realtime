<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { PStageConfig, Resources, TWorker, WorkerDocument } from './types';
import mockResource from '../../mock/resources'
import maps from '../../mock/maps'
import { extractKonva } from './konva';
import { Props } from './props';
import { DEFAULT_CONFIG, getMqttConfig, getStageConfig } from './config';
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
  resources,
  changeEncodedMap,
  encodedMap,
  windowSize,
  mapSize,
  setResources,
  updateWorker
} = useMap({
  getInitialResources() {
    return Promise.resolve<any>(mockResource)
  },
})
const configKonva: PStageConfig = getStageConfig(props, windowSize)
const stageRef = ref<any>(null)

const configResource = getMqttConfig()
const topics = ['hello', 'worker'] as const

const isResources = (data: any): data is Resources => {
  return data.Location && data.Worker
}
const isWorker = (data: any): data is TWorker => {
  return data.document && data.operation
}
const { ignite } = useMqtt<Resources | TWorker, typeof topics>({
  config: configResource,
  topics,
  onMessage(topic, message) {
    console.log('토픽 `' + topic + '`에서 메시지 수신:', message);
    if (topic === 'hello') {
      if (isResources(message)) setResources(message)
      else throw new Error('올바르지 않은 메시지 형식입니다')
    }
    else if (topic === 'worker') {
      if (isWorker(message)) updateWorker(message)
      else throw new Error('올바르지 않은 메시지 형식입니다')
    }
  },
})
const { dispose } = ignite()


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


onBeforeUnmount(() => {
  dispose()
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
      <v-image v-for="location in resources?.Location" :key="location.id" :config="{
      image: location.image,
      x: location.pose.x,
      y: location.pose.y,
      rotation: location.pose.theta
    }" />
      <v-image v-for="worker in resources?.Worker" :key="worker.id" :config="{
      image: worker.image, x: worker.pose.x,
      y: worker.pose.y, rotation: worker.pose.theta
    }" />

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
