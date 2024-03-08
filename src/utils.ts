import { Stage, Node } from "./types"


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