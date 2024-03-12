import { ref } from "vue"
import { getMap } from "../../../mock/api"
import useImage from "./image"
import { useWindowSize } from "@vueuse/core"
import { getMapSize } from "../config"
import resources from "../../../mock/resources"
import maps from "../../../mock/maps"
import { ImgDict, Locations } from "../types"


export default function useMap() {
  const mapImgRef = ref<HTMLImageElement | null>(null)
  const { loadImage, loadImages } = useImage()
  const windowSize = useWindowSize()
  const mapSize = getMapSize(windowSize)
  const locations = ref<Locations>([])
  const encodedMap = ref<string>(maps[0].id)


  const changeEncodedMap = (targetValue: string) => {
    const targetEncodedMapCode = getMap(targetValue).encoded_map
    if (targetEncodedMapCode) {
      mapImgRef.value = loadImage({ src: targetEncodedMapCode, width: mapSize.width, height: mapSize.height })
    }
  }

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

  changeEncodedMap(encodedMap.value)
  loadImages(init);

  return {
    mapImgRef,
    locations,
    changeEncodedMap,
    encodedMap,
    windowSize,
    mapSize
  }
}