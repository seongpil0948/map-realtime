import { extractKonva } from "../konva";
import { Ref } from "vue";

export default function useMouseWheel(stageRef: Ref<any>) {

  var scaleBy = 1.01;
  const handleWheel = (event: any) => {
    const { stage } = extractKonva(stageRef)
    // stop default scrolling
    event.evt.preventDefault();

    var oldScale = stage.scaleX();
    var pointer = stage.getPointerPosition();
    if (!pointer) return;

    var mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    // how to scale? Zoom in? Or zoom out?
    let direction = event.evt.deltaY > 0 ? 1 : -1;

    // when we zoom on trackpad, e.evt.ctrlKey is true
    // in that case lets revert direction
    if (event.evt.ctrlKey) {
      direction = -direction;
    }

    var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    stage.scale({ x: newScale, y: newScale });

    var newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
  }


  return {
    handleWheel
  }
}