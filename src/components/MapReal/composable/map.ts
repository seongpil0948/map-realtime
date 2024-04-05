import { Ref, computed, nextTick, onMounted, ref, shallowRef, watch } from "vue"
import { getMap } from "../../../mock/api"
import useImage from "./image"
import { useWindowSize } from "@vueuse/core"
import { getMapSize } from "../config"
import maps from "../../../mock/maps"
import { CleanResources, WorkerDocRefined, ImgDict, Resources, TWorker, Vector2D, WorkerDocument } from "../../../types/resource"
import { calcPose2D } from "../utils"
import { extractKonva } from "../konva"
import { TextConfig } from "../../../types"
import { generateObjectLabel } from "../../WorkerMap/utils/konva"



export default function useMap(props: {
  getInitialResources: () => Promise<Resources>
  stageRef: Ref<any>
  handleUpdateWorker: (worker: WorkerDocRefined) => void
  handleUpdateResources: () => void
}) {
  const { stageRef, handleUpdateResources, handleUpdateWorker } = props
  // TODO: to shallowRef
  const mapImgRef = ref<HTMLImageElement | null>(null)
  const loadedImages = shallowRef<ImgDict>()
  const { loadImage, loadImages } = useImage()
  const windowSize = useWindowSize()

  const resourcesRaw = ref<Resources>()
  const resources = ref<CleanResources>()
  const encodedMap = ref<string>(maps[0].id)
  const mapSize = computed(() => getMapSize(windowSize))

  const changeEncodedMap = (targetValue: string) => {
    const targetEncodedMapCode = getMap(targetValue).encoded_map
    if (targetEncodedMapCode) {
      mapImgRef.value = loadImage({
        src: targetEncodedMapCode,
        width: mapSize.value.width,
        height: mapSize.value.height
      })
      if (stageRef.value) {
        zoomIn()
      }
    }
  }

  const zoomIn = () => {
    const { stage } = extractKonva(stageRef)
    const scale = stage.scaleX()
    const center = getCenter()
    stage.position({ x: center.x, y: center.y })
    stage.offset({ x: center.x, y: center.y })
    if (scale !== 1) {
      stage.scale({ x: scale, y: scale })
    }
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
      handleUpdateWorker(refineData)
      resources.value.Worker.push(refineData)
    } else {
      resources.value.Worker[idx] = refineData
      const ww = resources.value.Worker[idx]
      handleUpdateWorker(ww)
    }
    setWorkerTexts()

  }

  const getCenter = (): Vector2D => ({
    x: mapSize.value.width / 2,
    y: mapSize.value.height / 2
  })

  const refineWorker = (doc: WorkerDocument): WorkerDocRefined => {
    if (!loadedImages.value) throw new Error('loadedImages is not loaded')
    const w = {
      ...doc,
      image: doc['status'] === 'idle' ? loadedImages.value['workerIdle'] : loadedImages.value['workerBusy'],
      pose: calcPose2D(doc.type_specific.location.pose2d, getCenter())
    }
    return w
  }

  const workerGroupRef = ref<any[]>([]);
  const workerTexts = ref<TextConfig[]>([]);
  const setWorkerTexts = () => {
    const texts: TextConfig[] = [];
    nextTick(() => {
      if (!stageRef || !stageRef.value) return
      workerGroupRef.value.forEach((x) => {
        console.log("ref: ", x)
        const tConfig = generateObjectLabel({ konvaEl: x, stageRef, place: "bottom", text: (node) => node.attrs.name });
        texts.push(tConfig);
      });
      workerTexts.value = texts;
      console.log(workerTexts.value)
    })
  };


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
    setWorkerTexts()
    handleUpdateResources()
    console.log('resources.value', resources.value)
  }

  watch(() => mapSize.value, () => {
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
    getCenter,
    setWorkerTexts,
    workerGroupRef,
    workerTexts,
  }
}
