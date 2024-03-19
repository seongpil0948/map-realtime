import { IClientOptions } from "mqtt";

export type MqttConfig = IClientOptions & { host: string }
export type MqttConfigs = MqttConfig[]

type MapMetadata = {
  height_gm: number,
  origin_px: number,
  origin_py: number,
  ox: number,
  oy: number,
  scale_m2px: number,
  width_gm: number
}

export type MapDataItem = {
  metadata: MapMetadata,
  _id: string,
  name: string,
  description: string,
  version: number,
  created_at: string,
  updated_at: string,
  id: string
}

export type MapResponse = {
  total: number,
  limit: number,
  skip: number,
  data: MapDataItem[]
}