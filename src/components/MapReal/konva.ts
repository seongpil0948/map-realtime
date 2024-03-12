import { Ref } from "vue"
import { Stage, Node } from "./types"
import Konva from "konva"


export function extractKonva(konvaCompRef: any): {
  stage: Stage,
  node: Node
} {
  return {
    stage: konvaCompRef.value.getStage(),
    node: konvaCompRef.value.getNode()
  }
}

export function flipY(node: Node) {
  node.to({
    scaleY: -node.scaleY(),
  })
}