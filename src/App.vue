<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue';
import mapImgData from './mock/map'
import resources from './mock/resources';
import { useWindowSize } from '@vueuse/core'


const { width, height } = useWindowSize()
const configKonva = {
  width: width.value * 4,
  height: height.value * 4
}
const locations = ref<Locations>([])
const mapSize = {
  width: 1496,
  height: 1104,
  x: configKonva.width / 2,
  y: configKonva.height / 2
}

const configCircle = {
  x: 100,
  y: 100,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4
}
const image = new Image()
image.src = mapImgData

image.width = mapSize.width
image.height = mapSize.height
image.style.transform = "rotate(180deg)"
const mapRef = ref<any>(null)
onMounted(() => {
  console.log("mapRef stage", mapRef.value.getStage())
  console.log("mapRef node", mapRef.value.getNode())
  const node = mapRef.value.getNode()
  // node.to({
  //   scaleY: -node.scaleY(),
  // })
})




const images = shallowRef<ImgDict>({})
function loadImages(sources: ImgSrcDict, callback: (images: ImgDict) => void) {
  var assetDir = '/';
  var loadedImages = 0;
  var numImages = 0;
  for (var label in sources) {
    numImages++;
  }
  for (var label in sources) {
    images.value[label] = new Image();
    images.value[label].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images.value);
      }
    };
    images.value[label].src = assetDir + sources[label];
  }
}



function init(images: ImgDict) {
  console.log("init", images)
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
  console.log("arr", arr, locations.value)
  locations.value = arr
}

watch(() => locations.value, (newLocations) => {
  console.log("watch newLocations", newLocations)
})

const sources: ImgSrcDict = {
  "marker": 'map__full--e53.svg',
};

loadImages(sources, init);


type Locations = {
  image: HTMLImageElement,
  x: number,
  y: number,
  theta: number
  label: string
}[]
type ImgDict = { [src: string]: HTMLImageElement }
type ImgSrcDict = { [label: string]: string }


</script>

<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-image ref="mapRef" :config="{ image, x: mapSize.x, y: mapSize.y }" />
      <!-- <v-image ref="mapRef" :config="{ image, }" /> -->
      <v-circle :config="configCircle"></v-circle>
      <v-image v-for="location in locations" :key="(location.x + location.y) * location.theta"
        :config="{ image: location.image, x: location.x, y: location.y }"></v-image>
    </v-layer>
  </v-stage>

</template>
