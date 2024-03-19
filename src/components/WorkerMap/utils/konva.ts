import { Ref } from "vue"
import { Node, Stage, Vector2D } from "../../../types"

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

