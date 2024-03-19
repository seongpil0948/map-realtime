import { computed, ref, shallowRef, watch } from "vue"
import type { ImageConfig, MapDataItem } from "../../../types"
import MapTools from "../utils/map"
import useImage from "./image"
import maps from "../../../mock/maps"

interface UseMapProps {
  onUpdateMap?: (map: MapDataItem) => void
}

export default function (p: UseMapProps) {
  const mapId = ref<string>()
  const mapAll = shallowRef<MapDataItem[]>()
  const { loadMapImage, loadStaticImages } = useImage()
  const mapImage = shallowRef<ImageConfig>()

  const getMaps = async () => {
    return Promise.resolve(maps)
  }
  const getCurrentMap = () => {
    if (!mapAll.value) throw new Error("map data is not initialized")
    const mapData = mapAll.value.find((m) => m.id === mapId.value)
    if (!mapData) throw new Error("invalid map id")
    return mapData
  }
  const mTool = computed(() => {
    const mapData = mapAll.value?.find((m) => m.id === mapId.value)
    if (!mapData) return
    return new MapTools({ mapData: mapData })
  })

  watch(() => mapId.value, (id, prevId) => {
    if (!id || !mapAll.value) {
      mapImage.value = undefined
      return
    } else if (prevId === id) return
    const mapData = getCurrentMap()

    p.onUpdateMap && p.onUpdateMap(mapData)

    loadMapImage(mapData).then((img) => {
      mapImage.value = img
    })
  })

  getMaps().then((res) => {
    mapAll.value = res
    mapId.value = res[2].id
  })

  return {
    mTool,
    mapId,
    mapAll,
    mapImage,
    loadStaticImages
  }


}
