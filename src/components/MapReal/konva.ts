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

export function thetaToDegree(theta: number) {
  const result = (theta * 180) / Math.PI
  return Math.ceil(result)
}
