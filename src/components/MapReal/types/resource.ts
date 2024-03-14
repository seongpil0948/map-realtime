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
interface CommonDate {
  created_at: string
  updated_at: string
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
  odometry: {
    orient_w: number
    orient_x: number
    orient_y: number
    orient_z: number
    position_x: number
    position_y: number
    position_z: number
    velo_dx: number
    velo_dy: number
    velo_dz: number
  }
  path_plan: PathPlan | null
}
interface WorkerLocationActive extends WorkerLocation {
  path_plan: PathPlan
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
  dynamic_footprint: any
  home_station: {
    name: string
    id: any
  }
  fmz: {
    fmz_id: any
    current: any
    node_path: any[]
    destination: any
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

export type ResourcesLocation = {
  _id: string,
  description: string,
  resource_active: boolean,
  resource_type: string,
  pose: Pose,
  name: string,
  map: string,
  type: string,
  created_at: string,
  updated_at: string,
  id: string
}
export type LocationClean = {
  image?: HTMLImageElement,
} & ResourcesLocation


export type WorkerParams = {
  designated: {
    pose: any[]
  }
}

export type ResourcesZone = {
  areas?: any[],
  _id: string,
  params_sets?: any[],
  description?: string,
  resources_active: boolean,
  resources_type: string,
  name: string,
  type: string,
  map: string,
  worker_params?: WorkerParams,
  created_at: string,
  updated_at: string,
  polygon: Vector2D[],
  id: string
}

export type ResourcesTeleporterGate = {
  _id: string,
  networks: any[],
  resource_waitings: (CommonDate & {
    _id: string,
    map: string,
    pose: Pose,
    type: string,
    name: string,
    description: string,
    resource_active: boolean,
    resource_type: string,
    id: string
  })[],
  description?: string,
  resource_active: boolean,
  resource_type: string,
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
  created_at: string,
  updated_at: string,
  teleporter: CommonDate & {
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
    site?: any,
    name: string,
    description?: string,
    resource_active: boolean,
    resource_type: string,
    standing_offset: any[],
    id: string
  },
  evacuation: string,
  waiting_after_cancel: CommonDate & {
    _id: string,
    description: string,
    resource_active: boolean,
    resource_type: string,
    pose: Pose,
    map: string,
    name: string,
    type: string,
    id: string
  },
  doors: {
    pose: Pose,
    door_no: number,
    evacuation: CommonDate & {
      _id: string,
      description: string,
      resource_active: boolean,
      resource_type: string,
      pose: Pose,
      map: string,
      name: string,
      type: string,
      id: string,
    }
  }[],
  id: string
}

export type ResourcesMarker = {
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
  _id: string,
  map: string,
  pose: Pose,
  gocart_marker: boolean,
  marker_value: Vector3D & {
    no: number,
    id: number,
    rid: number,
    rx: number,
    ry: number,
    rz: number
  },
  chargeable: boolean,
  charger_type: string,
  tags: any[],
  parking_offset: Pose,
  barrier: number,
  name: string,
  description: string,
  resource_active: boolean,
  resource_type: string,
  created_at: string,
  updated_at: string,
  id: string
}

export type ResourcesAutodoorExt = CommonDate & {
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
  polygon: { x: number, y: number }[],
  aligns: {
    pose: Vector2DTheta,
    tolerance: number
  }[],
  door_open_area: { x: number, y: number }[],
  resource_waitings: any[],
  name: string,
  description: string,
  resource_active: boolean,
  resource_type: string,
  id: string
}