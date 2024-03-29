import type { Resources, TWorker, Vector2D, WorkerDocument, WorkerDocumentActive } from "../../types";

export const isResources = (data: any): data is Resources => {
  return data.Location && data.Worker;
};
export const isWorker = (data: any): data is TWorker => {
  return data.document && data.operation;
};
export const isActiveWorker = (w: WorkerDocument): w is WorkerDocumentActive => {
  const p = w.type_specific.location.path_plan;
  return !!(p && p.global && p.local && p.local.length > 0);
};

export const getWorkerLocalPath = (w: WorkerDocumentActive, mapCenter: Vector2D, scaleFactor: number = 32) => {

  if (!w.type_specific.location.path_plan) throw new Error("경로가 없습니다");
  return w.type_specific.location.path_plan.local.map((p) => {
    return {
      x: mapCenter.x + p.x * (scaleFactor / 5),
      y: mapCenter.y + p.y * scaleFactor * 1.5,
    };
  });
};
export const getWorkerGlobalPath = (w: WorkerDocumentActive, mapCenter: Vector2D, scaleFactor: number = 32) => {
  const pp = w.type_specific.location.path_plan;
  if (!pp || !pp.global) throw new Error("global 경로가 없습니다");
  return pp.global.map((p) => {
    return {
      x: mapCenter.x + p.x * (scaleFactor / 5),
      y: mapCenter.y + p.y * scaleFactor * 1.5,
    };
  });
};

export function flat2D(arr: Vector2D[]) {
  return arr.reduce((acc, cur) => {
    acc.push(cur.x, cur.y)
    return acc
  }, [] as number[])
  // .map((xy) => [xy.x, xy.y]).flat()
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

