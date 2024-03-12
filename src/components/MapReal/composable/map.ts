import { computed, onMounted, ref, shallowRef, watch } from "vue"
import { getMap } from "../../../mock/api"
import useImage from "./image"
import { useWindowSize } from "@vueuse/core"
import { getMapSize } from "../config"
import maps from "../../../mock/maps"
import { CleanResources, ImgDict, Resources } from "../types"
import { thetaToDegree } from "../konva"


export default function useMap(props: {
  getInitialResources: () => Promise<Resources>
}) {
  const mapImgRef = ref<HTMLImageElement | null>(null)
  const loadedImages = shallowRef<ImgDict>()
  const { loadImage, loadImages } = useImage()
  const windowSize = useWindowSize()

  const resourcesRaw = shallowRef<Resources>()
  const resources = shallowRef<CleanResources>()
  const encodedMap = ref<string>(maps[0].id)
  const mapSize = computed(() => getMapSize(windowSize))

  const changeEncodedMap = (targetValue: string) => {
    const targetEncodedMapCode = getMap(targetValue).encoded_map
    if (targetEncodedMapCode) {
      mapImgRef.value = loadImage({ src: targetEncodedMapCode, width: mapSize.value.width, height: mapSize.value.height })
    }
  }

  const handleLoadImage = (images: ImgDict) => {
    loadedImages.value = images
    processResource()
  }
  const isLoadedImage = computed(() => loadedImages.value && Object.keys(loadedImages.value).length > 0)

  const setResources = (resource: Resources) => {
    resourcesRaw.value = resource
    processResource()
  }

  const processResource = () => {
    const resource = resourcesRaw.value
    if (!resource) return

    const mapCenterX = mapSize.value.width / 2
    const mapCenterY = mapSize.value.height / 2
    const calcPose2D = (pose: { x: number, y: number, theta: number }) => ({
      x: pose.x + mapCenterX,
      y: pose.y + mapCenterY,
      theta: thetaToDegree(pose.theta)
    })
    if (!isLoadedImage.value) return
    const imgs = loadedImages.value as ImgDict
    resources.value = {
      ...resource,
      Location: resource.Location.map((location) => {
        return {
          ...location,
          image: imgs['marker'],
          pose: calcPose2D(location.pose)
        }
      }),
      Worker: resource.Worker.map((worker) => {
        return {
          ...worker,
          image: imgs['workerIdle'],
          pose: calcPose2D(worker.type_specific.location.pose2d)
        }

      })
    } as CleanResources
    console.log('resources.value', resources.value)
  }

  watch(() => mapSize.value, (value) => {
    console.log('mapSize changed', value)
    changeEncodedMap(encodedMap.value)
  }, {
    immediate: true
  })

  props.getInitialResources().then((resource) => {
    setResources(resource)
    loadImages(handleLoadImage)
  })


  return {
    mapImgRef,
    changeEncodedMap,
    encodedMap,
    windowSize,
    mapSize,
    isLoadedImage,
    processResource, resources,
    setResources
  }
}
