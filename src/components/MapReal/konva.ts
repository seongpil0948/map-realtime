import { getDefaultConfig } from "./config"
import { Vector2D, Node, Stage, WorkerDocumentActive } from "../../types"
import { flat2D, getWorkerGlobalPath, getWorkerLocalPath } from "./utils"


export function extractKonva(konvaCompRef: any): {
  stage: Stage,
  node: Node
} {
  // caution: stage, node always same
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

export function makeWorker2Line(w: WorkerDocumentActive, kind: "local" | "global", mapCenter: Vector2D) {
  const path = kind === "local" ? getWorkerLocalPath(w, mapCenter) : getWorkerGlobalPath(w, mapCenter)
  const p = flat2D(path);
  const c = getDefaultConfig.line();
  c.points = p;
  if (kind === "local") {
    c.stroke = "blueviolet"
  } else {
    c.stroke = "hotpink"
  }
  return c
}

