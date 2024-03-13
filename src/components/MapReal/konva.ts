import { Stage, Node, Vector2D } from "./types"


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


export const calcPose2D = (pose: Vector2D & { theta: number }, origin: Vector2D) => ({
  x: pose.x + origin.x,
  y: pose.y + origin.y,
  theta: thetaToDegree(pose.theta)
})