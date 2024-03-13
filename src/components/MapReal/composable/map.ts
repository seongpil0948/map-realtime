import { computed, ref, shallowRef, watch } from "vue"
import { getMap } from "../../../mock/api"
import useImage from "./image"
import { useWindowSize } from "@vueuse/core"
import { getMapSize } from "../config"
import maps from "../../../mock/maps"
import { CleanResources, CleanWorkerDoc, ImgDict, Resources, TWorker, Vector2D, WorkerDocument } from "../types"
import { calcPose2D } from "../konva"



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

  const updateWorker = (worker: TWorker) => {
    const d = worker.document
    if (!resources.value) return
    const idx = resources.value.Worker.findIndex((w) => w.id === d.id)
    const refineData = refineWorker(d)
    if (idx === -1) {
      resources.value.Worker.push(refineData)
    } else {
      resources.value.Worker[idx] = refineData
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
    processResource,
    resources,
    setResources,
    updateWorker
  }
}
