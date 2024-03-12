import type { CSSProperties } from 'vue'


export interface Props {
  canvasStyle: CSSProperties
  scale: number
}
export type PropKey = keyof Props
