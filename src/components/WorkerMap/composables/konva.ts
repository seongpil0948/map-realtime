import { useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import type { Stage, StageConfig } from "../../../types";
import { extractStage } from "../utils/konva";

export default function () {
  const windowSize = useWindowSize()
  const stageRef = ref(null);

  const stageConfig = computed<StageConfig>(() => ({
    container: 'app',
    width: windowSize.width.value,
    height: windowSize.height.value,
    draggable: true,
    // FIXME(가라): 원래는 없음
    offsetX: (windowSize.width.value / 4),
    offsetY: (windowSize.height.value / 2),
  }))

  const getCenter = (stage: Stage) => {
    return {
      x: stage.width() / 2,
      y: stage.height() / 2
    }
  }

  const getStage = () => extractStage(stageRef)
  const zoomIn = () => {
    // const stage = getStage()
    // const center = getCenter(stage)
    // stage.position({ x: center.x, y: center.y })
    // stage.offsetY(center.y * 2)

    // if (scale !== 1) {
    //   stage.scale({ x: scale, y: scale })
    // }
  }

  onMounted(() => {
    const stage = getStage()
    console.log(stage);
  });

  return {
    stageConfig,
    stageRef,
    getCenter,
    zoomIn,
    getStage
  }
} 