<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { ImgDict, Locations, PStageConfig } from './types';
import { useKonv, useMsgQueue } from './composable'
import resources from '../../mock/resources';
import { getMap } from '../../mock/api';
import maps from '../../mock/maps'
import { extractKonva } from './konva';
import { Props } from './props';
import { DEFAULT_CONFIG } from './config';
import { MapEvent } from './events';

const props = withDefaults(defineProps<Props>(), {
  ...DEFAULT_CONFIG,
  canvasStyle: () => DEFAULT_CONFIG.canvasStyle,
})


const emit = defineEmits<MapEvent>()
const { width, height } = useWindowSize()
const configKonva: PStageConfig = {
  width: width.value,
  height: height.value,
  draggable: true,
  scaleX: props.scale,
  scaleY: props.scale
}
const locations = ref<Locations>([])
const mapSize = {
  width: width.value,
  height: height.value,
  x: 0,
  y: 0
}
const encodedMap = ref<string>(maps[0].id)
const { loadImage, loadImages } = useKonv()
const mapImgRef = ref<HTMLImageElement | null>(null)
const stageRef = ref<any>(null)
function init(images: ImgDict) {

  const mapCenter = {
    x: mapSize.width / 2,
    y: mapSize.height / 2
  }
  const arr: typeof locations.value = []
  resources.Location.forEach((location) => {
    const { x, y, theta } = location.pose;
    arr.push({
      image: images['marker'],
      x: mapSize.x + (mapCenter.x + x * 10),
      y: mapSize.y + (mapCenter.y + y * 10),
      // x: Math.abs(x * theta),
      // y: Math.abs(y * theta),
      theta: theta,
      label: location.name
    })
  });
  locations.value = arr
}

const changeEncodedMap = (targetValue: string) => {
  const targetEncodedMapCode = getMap(targetValue).encoded_map
  if (targetEncodedMapCode) {
    mapImgRef.value = loadImage({ src: targetEncodedMapCode, width: mapSize.width, height: mapSize.height })
  }
}

changeEncodedMap(encodedMap.value)
loadImages(init);

const { getClient } = useMsgQueue()
const client = getClient('spspsps')
client.connect()

onMounted(() => {
  console.info(extractKonva(stageRef))
})

onBeforeUnmount(() => {
  client.dispose()
})

// >>> temp >>>
const infoText = ref<string>('')

const setInfoText = (message: string) => {
  infoText.value = message;
}
const handleMouseOut = (event: MouseEvent) => {
  setInfoText('Mouseout map');
}
const handleMouseMove = (event: MouseEvent) => {
  // console.info('Mousemove', event)
  const { stage } = extractKonva(stageRef)
  const mousePos = stage.getPointerPosition();
  if (!mousePos) return;
  emit('update:mouse', { x: mousePos.x, y: mousePos.y })
  setInfoText(mousePos.x + ', ' + mousePos.y);
}


var scaleBy = 1.01;
const handleWheel = (event: any) => {
  console.info('Wheel', event)
  const { stage } = extractKonva(stageRef)
  // stop default scrolling
  event.evt.preventDefault();

  var oldScale = stage.scaleX();
  var pointer = stage.getPointerPosition();
  if (!pointer) return;

  var mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  // how to scale? Zoom in? Or zoom out?
  let direction = event.evt.deltaY > 0 ? 1 : -1;

  // when we zoom on trackpad, e.evt.ctrlKey is true
  // in that case lets revert direction
  if (event.evt.ctrlKey) {
    direction = -direction;
  }

  var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

  stage.scale({ x: newScale, y: newScale });

  var newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };
  stage.position(newPos);
}

const handleDragStart = (event: any) => {
  console.log('DragStart', event)
}
const handleDragEnd = (event: any) => {
  console.log('DragEnd', event)
}
const handleDrag = (event: any) => {
  console.log('Drag', event)
}
// <<< temp <<<


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
