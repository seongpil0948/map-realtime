import { Ref } from "vue"
import { Node, Stage, TextConfig, Vector2D } from "../../../types"
import factory from "./factory"

const isValidStage = (stage: any) => {
  // TODO(임규리): 무조건 stageRef만 들어올 수 있도록 
  return true
}
export const extractStage = (stageRef: Ref<any>) => {
  if (!isValidStage(stageRef.value)) throw new Error('invalid stage')
  return stageRef.value.getStage() as Stage
}

export const extractNode = (stageRef: Ref<any>) => {
  return stageRef.value.getNode() as Node
}

export function flipY(node: Node) {
  node.to({
    scaleY: -node.scaleY(),
  })
}

export function rotateNode(node: Node, degree: number) {
  node.to({
    rotation: degree,
  })
}

export function moveNode(node: Node, x: number, y: number) {
  node.to({
    x,
    y,
  })
}


export function generateObjectLabel(
  {
    konvaEl,
    stageRef,
    place,
    text,
    distance = 10
  }: {
    konvaEl: any;
    stageRef: Ref<any>;
    place: 'top' | 'bottom' | 'left' | 'right';
    text: (node: Node) => string;
    distance?: number
  }): TextConfig {
  const node = konvaEl.getNode() as Node
  const stage = extractStage(stageRef)
  const rect = node.getClientRect({ relativeTo: stage })
  console.log("node: ", node)
  const tConfig: TextConfig = {
    ...factory.konva.text(),
    x: rect.x + rect.width / 4,
    y: rect.y - distance,
    text: text(node),
    fill: 'red',
    align: 'center',
    fontSize: 8
  }
  if (place === 'top') {
    return tConfig
  }
  else if (place === 'bottom') {
    return {
      ...tConfig,
      y: rect.y + rect.height + distance,
    }
  }
  throw new Error('invalid place')
}