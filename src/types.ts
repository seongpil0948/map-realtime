export type { LayerConfig, Layer } from 'konva/lib/Layer'
import type { NodeConfig, Node } from 'konva/lib/Node'
export type { NodeConfig, Node }
import type { StageConfig, Stage } from 'konva/lib/Stage'
type PStageConfig = Omit<StageConfig, 'container'>
export type { StageConfig, Stage, PStageConfig }
export type { Image, ImageConfig } from 'konva/lib/shapes/Image'

export type Locations = {
  image: HTMLImageElement,
  x: number,
  y: number,
  theta: number
  label: string
}[]
export type ImgDict = { [src: string]: HTMLImageElement }
export type ImgSrcDict = { [label: string]: string }

