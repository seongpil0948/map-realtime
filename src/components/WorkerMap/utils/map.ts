import { Resources, TWorker, WorkerDocument, WorkerDocumentActive, Vector2D, Vector2DTheta, MapDataItem, Pose } from "../../../types";


export interface MapToolParams {
  strokeWidth?: number,
  radius?: number,
  mapData: MapDataItem
}

export default class MapTools {
  strokeWidth: number // Qo
  radius: number // Et
  M2PX: number
  mapOrigin: Vector2D

  constructor(p: MapToolParams) {
    this.strokeWidth = p.strokeWidth ?? 2
    this.radius = p.radius ?? 10
    this.M2PX = p.mapData.metadata.scale_m2px
    this.mapOrigin = {
      x: p.mapData.metadata.origin_px,
      y: p.mapData.metadata.origin_py,
    }
  }
  static thetaToDegree(theta: number) {
    const result = (theta * 180) / Math.PI
    return Math.ceil(result)
  }
  static degreeToTheta(degree: number) {
    return (degree * Math.PI) / 180
  }
  static flat2D(arr: Vector2D[]) {
    return arr.reduce((acc, cur) => {
      acc.push(cur.x, cur.y)
      return acc
    }, [] as number[])
    // .map((xy) => [xy.x, xy.y]).flat()
  }


  static getDegreeByPoints(src: Vector2D, dest: Vector2D) {
    const dx = dest.x - src.x
    const dy = dest.y - src.y
    let theta = Math.atan(dy / dx);
    if (dx < 0) {
      theta += Math.PI;
    }
    return theta;
  }

  getArrowEndPoint(src: Vector2D, dest: Vector2D) {
    const o = Math.PI - MapTools.getDegreeByPoints(src, dest)
    const i = this.radius + this.strokeWidth / 2;
    return {
      x: dest.x + i * Math.cos(o),
      y: dest.y - i * Math.sin(o),
    };
  }
  transformByDegree(src: Vector2D, dest: Vector2DTheta) {
    const t = dest.x
    const o = dest.y
    const degree = MapTools.degreeToTheta(dest.theta)
    const a = src.x - t
    const r = (src.y - o) * -1
    return {
      x: a * Math.cos(degree) - r * Math.sin(degree) + t,
      y: (a * Math.sin(degree) + r * Math.cos(degree)) * -1 + o,
      theta: dest.theta,
    };
  }

  transformPointM2PX = (s: Vector2D) => {
    return {
      x: this.mapOrigin.x + s.x * this.M2PX,
      y: this.mapOrigin.y - s.y * this.M2PX,
    };
  }
  transformPoseM2PX = (s: Pose): Pose => ({
    ...this.transformPointM2PX(s),
    theta: MapTools.thetaToDegree(s.theta)
  })

}

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




