import { useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import type { PStageConfig, Stage } from "../../../types";
import { extractStage } from "../utils/konva";

export default function () {
  const windowSize = useWindowSize()
  const stageRef = ref(null);

  const stageConfig = computed<PStageConfig>(() => ({
    width: windowSize.width.value,
    height: windowSize.height.value,
    draggable: true,
    offsetX: -(windowSize.width.value / 2),
    offsetY: (windowSize.height.value / 4),
  }))

  const getCenter = (stage: Stage) => {
    return {
      x: stage.width() / 2,
      y: stage.height() / 2
    }
  }

  const zoomIn = () => {
    const stage = extractStage(stageRef);
    // const center = getCenter(stage)
    // stage.position({ x: center.x, y: center.y })
    // stage.offsetY(center.y * 2)

    // if (scale !== 1) {
    //   stage.scale({ x: scale, y: scale })
    // }
  }

  onMounted(() => {
    const stage = extractStage(stageRef);
    console.log(stage);
  });

  return {
    stageConfig,
    stageRef,
    getCenter,
    zoomIn
  }
} 