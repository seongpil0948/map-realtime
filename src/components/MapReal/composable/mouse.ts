import { Ref, ref } from "vue";
import { MapEvent } from "../events";
import { extractKonva } from "../konva";

export default function useMouseMove(stageRef: Ref<any>, emit: MapEvent) {
  const infoText = ref<string>('')
  const setInfoText = (message: string) => {
    infoText.value = message;
  }
  const handleMouseOut = (event: MouseEvent) => {
    setInfoText('Mouseout map');
  }
  const handleMouseMove = (event: MouseEvent,) => {
    // console.info('Mousemove', event)
    const { stage } = extractKonva(stageRef)
    const mousePos = stage.getPointerPosition();
    if (!mousePos) return;
    emit('update:mouse', { x: mousePos.x, y: mousePos.y })
    setInfoText(mousePos.x + ', ' + mousePos.y);
  }

  return {
    handleMouseMove,
    handleMouseOut,
    infoText
  }
}