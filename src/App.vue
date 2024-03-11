<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref, watchEffect } from 'vue';
import resources from './mock/resources';
import { useWindowSize } from '@vueuse/core'
import { ImgDict, Locations, PStageConfig } from './types';
import { useKonv, useMsgQueue } from './composable';
import { getMap } from './mock/api';
import maps from './mock/maps'
// import mapImgData from './mock/map'
// import * as Paho from "paho-mqtt"

const { width, height } = useWindowSize()
const configKonva: PStageConfig = {
  width: width.value,
  height: height.value
}
const locations = ref<Locations>([])
const mapSize = {
  width: 1496,
  height: 1104,
  x: 0,
  y: 0
}
const encodedMap = ref<string>(maps[0].id)
const { loadImage, loadImages } = useKonv()
// const image = loadImage({ src: mapImgData, width: mapSize.width, height: mapSize.height })
const image = ref<any>(null)
const mapRef = ref<any>(null)
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
    image.value = loadImage({ src: targetEncodedMapCode, width: mapSize.width, height: mapSize.height })
  }
}

changeEncodedMap(encodedMap.value)
loadImages(init);

const { msgQueue, getClient } = useMsgQueue()
const client = getClient('spspsps')
client.connect()

watchEffect(() => {
  if (msgQueue.value.length > 0) {
    console.log(msgQueue.value)
  }
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
  <v-stage :config="configKonva">
    <v-layer>
      <v-image ref="mapRef" :config="{ image, x: mapSize.x, y: mapSize.y }" />
      <!-- <v-image ref="mapRef" :config="{ image }" /> -->
      <!-- <v-circle :config="configCircle"></v-circle> -->
      <v-image v-for="   location    in    locations   " :key="(location.x + location.y) * location.theta"
        :config="{ image: location.image, x: location.x, y: location.y }"></v-image>
    </v-layer>
  </v-stage>

</template>./utilsImgDict, ImgSrcDict,ImgDict, ImgSrcDict,
