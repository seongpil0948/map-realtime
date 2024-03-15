import { useWindowSize } from '@vueuse/core'
import { ImgKeys } from '../composable/image'

export type Vector2D = { x: number; y: number }
export type Vector3D = Vector2D & { z: number }

export type Vector2DTheta = { theta: number } & Vector2D
export type WidthHeightRef = ReturnType<typeof useWindowSize>
export type WidthHeight = { width: number; height: number }
export type WidthHeight2DTheta = WidthHeight & Vector2DTheta

export type Locations = (Vector2DTheta & {
  image: HTMLImageElement,
  label: string
})[]

export type Common3D<prefix extends string> = {
  [k in `${prefix}x` | `${prefix}y` | `${prefix}z` | `${prefix}w`] : number
} 

export type ImgDict = Record<ImgKeys, HTMLImageElement>
export type ImgSrcDict = Record<ImgKeys, string>

export type PathPlanGlobal = Vector2D[]
export type PathPlanLocal = (Vector2D & {
  theta?: number // only for the first point as robot current pose
})[]
export type PathPlan = {
  global: PathPlanGlobal
  local: PathPlanLocal
}
interface WorkerLocation {
  map: string
  pose2d: Vector2DTheta & { id: number }
  semantic_location: any
  romo_state: string
  odometry: Common3D<'orient_'> & Common3D<'position_'> & Common3D<'velo_'>
  path_plan: PathPlan | null
}
interface WorkerLocationActive extends WorkerLocation {
  path_plan: PathPlan
}

interface CommonDate {
  created_at: string
  updated_at: string
}

interface CommonLocInfo {
  map: string,
  type: string,
  name: string,
}

interface CommonResActjvInfo {
  description: string,
  resource_active: boolean,
  resource_type: string,
}

interface CommonIdInfo {
  _id: string,
  pose: Pose,
  id: string
}

export interface WorkerSpecific {
  robot_info: WidthHeight & {
    size_center_to_front: number
    size_center_to_rear: number
    size_center_to_left: number
    size_center_to_right: number
    model: string
  }
  battery: {
    battery_level: number
    now_charging: boolean
    charge_source: string
  }
  location: WorkerLocation
  ip: string
  target_fms_ip: string
  dynamic_footprint: unknown
  home_station: {
    name: string
    id: unknown
  }
  fmz: {
    fmz_id: unknown
    current: unknown
    node_path: unknown[]
    destination: unknown
  }
}
export type WorkerSpecificActive = WorkerSpecific & {
  location: WorkerLocationActive
}
export type WorkerDocument = CommonDate & {
  status_p: string
  id: string
  uuid: string
  name: string
  status: "idle" | "busy"
  type_specific: WorkerSpecific
}
export type WorkerDocumentActive = WorkerDocument & {
  type_specific: WorkerSpecificActive
}
export type TWorker = {
  document_id: string
  document: WorkerDocument
  operation: string
}
export type CleanWorkerDoc = WorkerDocument & {
  image: HTMLImageElement
  pose: Pose
}

export type Resources = {
  Location: ResourcesLocation[],
  Zone: ResourcesZone[],
  TeleporterGate: ResourcesTeleporterGate[],
  Marker: ResourcesMarker[],
  AutodoorExt: ResourcesAutodoorExt[],
  Worker: WorkerDocument[]
}
export interface CleanResources extends Resources {
  Location: LocationClean[]
  Worker: CleanWorkerDoc[]
}

export type Pose = Vector2DTheta

export type ResourcesLocation = CommonDate & CommonLocInfo & CommonResActjvInfo & CommonIdInfo

export type LocationClean = {
  image?: HTMLImageElement,
} & ResourcesLocation


export type WorkerParams = {
  designated: {
    pose: unknown[]
  }
}

export type ResourcesZone = CommonDate & CommonLocInfo & CommonResActjvInfo & {
  areas?: unknown[],
  _id: string,
  params_sets?: unknown[],
  worker_params?: WorkerParams,
  polygon: Vector2D[],
  id: string
}

export type ResourcesTeleporterGate = CommonDate & CommonResActjvInfo & {
  _id: string,
  networks: unknown[],
  resource_waitings: (CommonDate & CommonLocInfo & CommonResActjvInfo & CommonIdInfo)[],
  name: string,
  map: string,
  area: WidthHeight2DTheta,
  aligns: {
    entries: Pose[],
    exits: Pose[]
  },
  properties: {
    floor_id: number,
    floor_name: string
  },
  parameters: {
    marker_id: number,
    marker_pose: Pose
  },
  teleporter: CommonDate & CommonResActjvInfo & {
    _id: string,
    type: string,
    properties: {
      ip: string,
      port: number,
      vendor: string,
      elsa_id: number,
      client_id: string,
      client_pw: string,
      group_id: number,
      internal_id: number,
      max_floor: number,
      min_floor: number
    },
    site?: unknown,
    name: string,
    standing_offset: unknown[],
    id: string
  },
  evacuation: string,
  waiting_after_cancel: CommonDate & CommonLocInfo & CommonResActjvInfo & CommonIdInfo 
  doors: {
    pose: Pose,
    door_no: number,
    evacuation: CommonDate & CommonLocInfo & CommonResActjvInfo & CommonIdInfo
  }[],
  id: string
}

export type ResourcesMarker = CommonDate & CommonResActjvInfo & CommonIdInfo & {
  param_point: {
    pose: Pose,
    landform: {
      type: string,
      max_speed: number,
      max_angular_speed: number
    }
  },
  unpark: {
    distance: number,
    backward: boolean
  },
  map: string,
  gocart_marker: boolean,
  marker_value: Vector3D & Common3D<'r'> & {
    no: number,
    id: number,
    rid: number,
  },
  chargeable: boolean,
  charger_type: string,
  tags: unknown[],
  parking_offset: Pose,
  barrier: number,
  name: string,
}

export type ResourcesAutodoorExt = CommonDate & CommonResActjvInfo & {
  properties: {
    connection: {
      ip: string,
      port: number,
      group_id: string[],
      open_check: number,
      close_check: number,
      auth_id: string,
      auth_pw: string,
    },
    vendor: string,
    wait_close: boolean
  },
  _id: string,
  map: string,
  polygon: Vector2D[],
  aligns: {
    pose: Vector2DTheta,
    tolerance: number
  }[],
  door_open_area: Vector2D[],
  resource_waitings: unknown[],
  name: string,
  id: string
}