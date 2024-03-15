export type { LayerConfig, Layer } from 'konva/lib/Layer'
import type { NodeConfig, Node } from 'konva/lib/Node'
export type { NodeConfig, Node }
import type { StageConfig, Stage } from 'konva/lib/Stage'

type PStageConfig = Omit<StageConfig, 'container'>
export type { StageConfig, Stage, PStageConfig }
export type { Image, ImageConfig } from 'konva/lib/shapes/Image'
export type { Shape, ShapeConfig, ShapeConfigHandler } from 'konva/lib/Shape'
export type { Circle, CircleConfig } from 'konva/lib/shapes/Circle'
export type { Line, LineConfig } from 'konva/lib/shapes/Line'
export type { Text, TextConfig } from 'konva/lib/shapes/Text'
export type { Label, LabelConfig } from 'konva/lib/shapes/Label'
export type { Group, GroupConfig } from 'konva/lib/Group'

import type { KonvaEventObject } from 'konva/lib/Node'
export type { KonvaEventListener } from 'konva/lib/Node'
export type EvtMouseMove = KonvaEventObject<GlobalEventHandlersEventMap['mousemove']>
export type EvtMouseOver = KonvaEventObject<GlobalEventHandlersEventMap['mouseover']>
export type EvtMouseOut = KonvaEventObject<GlobalEventHandlersEventMap['mouseout']>