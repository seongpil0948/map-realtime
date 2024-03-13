export type { LayerConfig, Layer } from 'konva/lib/Layer'
import { useWindowSize } from '@vueuse/core'
import type { NodeConfig, Node } from 'konva/lib/Node'
export type { NodeConfig, Node }
import type { StageConfig, Stage } from 'konva/lib/Stage'
import { ImgKeys } from './composable/image'
type PStageConfig = Omit<StageConfig, 'container'>
export type { StageConfig, Stage, PStageConfig }
export type { Image, ImageConfig } from 'konva/lib/shapes/Image'
export type Vector2D = { x: number; y: number }
export type Vector2DTheta = { theta: number } & Vector2D

export type WidthHeightRef = ReturnType<typeof useWindowSize>
export type Locations = {
  image: HTMLImageElement,
  x: number,
  y: number,
  theta: number
  label: string
}[]
export type ImgDict = Record<ImgKeys, HTMLImageElement>
export type ImgSrcDict = Record<ImgKeys, string>
export interface WorkerSpecific {
  robot_info: {
    width: number
    length: number
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
  location: {
    map: string
    pose2d: {
      x: number
      y: number
      theta: number
      id: number
    }
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
    path_plan: any
  }
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
export type WorkerDocument = {
  created_at: string
  updated_at: string
  status_p: string
  id: string
  uuid: string
  name: string
  status: "idle" | "busy"
  type_specific: WorkerSpecific
}
export type TWorker = {
  document_id: string
  document: WorkerDocument
  operation: string
}
export type CleanWorkerDoc = WorkerDocument & {
  image: HTMLImageElement
  pose: Vector2DTheta
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

export type Pose = {
  x: number,
  y: number,
  theta: number
}

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
  polygon: { x: number, y: number }[],
  id: string
}

export type ResourcesTeleporterGate = {
  _id: string,
  networks: any[],
  resource_waitings: {
    _id: string,
    map: string,
    pose: Pose,
    type: string,
    name: string,
    description: string,
    resource_active: boolean,
    resource_type: string,
    created_at: string,
    updated_at: string,
    id: string
  }[],
  description?: string,
  resource_active: boolean,
  resource_type: string,
  name: string,
  map: string,
  area: { x: number, y: number, theta: number, width: number, height: number },
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
  teleporter: {
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
    created_at: string,
    updated_at: string,
    standing_offset: any[],
    id: string
  },
  evacuation: string,
  waiting_after_cancel: {
    _id: string,
    description: string,
    resource_active: boolean,
    resource_type: string,
    pose: Pose,
    map: string,
    name: string,
    type: string,
    created_at: string,
    updated_at: string,
    id: string
  },
  doors: {
    pose: {
      x: number,
      y: number
    },
    door_no: number,
    evacuation: {
      _id: string,
      description: string,
      resource_active: boolean,
      resource_type: string,
      pose: Pose,
      map: string,
      name: string,
      type: string,
      created_at: string,
      updated_at: string,
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
  marker_value: {
    no: number,
    id: number,
    rid: number,
    x: number,
    y: number,
    z: number,
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

export type ResourcesAutodoorExt = {
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
    pose: {
      x: number,
      y: number,
      theta: number
    },
    tolerance: number
  }[],
  door_open_area: { x: number, y: number }[],
  resource_waitings: any[],
  name: string,
  description: string,
  resource_active: boolean,
  resource_type: string,
  created_at: string,
  updated_at: string,
  id: string
}