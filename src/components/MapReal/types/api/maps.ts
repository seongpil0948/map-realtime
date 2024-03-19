type Metadata = {
  height_gm: number,
  origin_px: number,
  origin_py: number,
  ox: number,
  oy: number,
  scale_m2px: number,
  width_gm: number
}

type DataItem = {
  metadata: Metadata,
  _id: string,
  name: string,
  description: string,
  version: number,
  created_at: string,
  updated_at: string,
  id: string
}

export type ResponseMaps = {
  total: number,
  limit: number,
  skip: number,
  data: DataItem[]
}