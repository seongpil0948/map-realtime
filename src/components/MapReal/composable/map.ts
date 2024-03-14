import { Ref, computed, onMounted, ref, shallowRef, watch } from "vue"
import { getMap } from "../../../mock/api"
import useImage from "./image"
import { useWindowSize } from "@vueuse/core"
import { getMapSize } from "../config"
import maps from "../../../mock/maps"
import { CleanResources, CleanWorkerDoc, ImgDict, Resources, TWorker, Vector2D, WorkerDocument } from "../types/resource"
import { calcPose2D } from "../utils"
import { extractKonva } from "../konva"



export default function useMap(props: {
  getInitialResources: () => Promise<Resources>
  stageRef: Ref<any>
}) {
  const { stageRef } = props
  // TODO: to shallowRef
  const mapImgRef = ref<HTMLImageElement | null>(null)
  const loadedImages = shallowRef<ImgDict>()
  const { loadImage, loadImages } = useImage()
  const windowSize = useWindowSize()

  const resourcesRaw = shallowRef<Resources>()
  const resources = ref<CleanResources>()
  const encodedMap = ref<string>(maps[0].id)
  const mapSize = computed(() => getMapSize(windowSize))

  const changeEncodedMap = (targetValue: string) => {
    const targetEncodedMapCode = getMap(targetValue).encoded_map
    if (targetEncodedMapCode) {
      mapImgRef.value = loadImage({ src: targetEncodedMapCode, width: mapSize.value.width, height: mapSize.value.height })
      // if (stageRef.value) {
      //   const { stage } = extractKonva(stageRef)
      //   // zoom in to center of image
      //   const center = getCenter()
      //   const scale = stage.scaleX()
      //   stage.scale({ x: scale, y: scale })
      //   stage.position(center)
      // }
    }
  }

  const zoomIn = () => {
    const { stage } = extractKonva(stageRef)
    const scale = stage.scaleX()
    const center = getCenter()
    stage.position({ x: 0, y: 0 })
    stage.offset({ x: center.x / 2, y: center.y / 2 })
    // stage.scale({ x: scale * 1.1, y: scale * 1.1 })
  }
  onMounted(() => {
    zoomIn()
  })

  const handleLoadImage = (images: ImgDict) => {
    loadedImages.value = images
    processResource()
  }
  const isLoadedImage = computed(() => loadedImages.value && Object.keys(loadedImages.value).length > 0)

  const setResources = (resource: Resources) => {
    resourcesRaw.value = resource
    processResource()
  }

  const updateWorker = (worker: TWorker) => {
    const d = worker.document
    if (!resources.value) return
    const idx = resources.value.Worker.findIndex((w) => w.id === d.id)
    const refineData = refineWorker(d)
    if (idx === -1) {
      resources.value.Worker.push(refineData)
    } else {
      resources.value.Worker[idx] = refineData
      const ww = resources.value.Worker[idx]
      console.log('resources.value.Worker', ww.id, ww.status, ww.type_specific.location.path_plan)
    }
  }

  const getCenter = (): Vector2D => ({
    x: mapSize.value.width / 2,
    y: mapSize.value.height / 2
  })

  const refineWorker = (doc: WorkerDocument): CleanWorkerDoc => {
    if (!loadedImages.value) throw new Error('loadedImages is not loaded')
    return {
      ...doc,
      image: doc['status'] === 'idle' ? loadedImages.value['workerIdle'] : loadedImages.value['workerBusy'],
      pose: calcPose2D(doc.type_specific.location.pose2d, getCenter())
    }
  }


  const processResource = () => {
    console.info('processResource')
    const resource = resourcesRaw.value
    if (!resource) return
    const cp2d = (p: Vector2D & { theta: number }) => calcPose2D(p, getCenter())

    if (!isLoadedImage.value) return
    const imgs = loadedImages.value as ImgDict
    resources.value = {
      ...resource,
      Location: resource.Location.map((location) => {
        return {
          ...location,
          image: imgs['marker'],
          pose: cp2d(location.pose)
        }
      }),
      Worker: resource.Worker.map((workerDoc) => {
        return refineWorker(workerDoc)

      })
    } as CleanResources
    console.log('resources.value', resources.value)
  }

  watch(() => mapSize.value, (value) => {
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
    processResource,
    resources,
    setResources,
    updateWorker,
    getCenter
  }
}
