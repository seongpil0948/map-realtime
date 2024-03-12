// import type { EditorState } from '@codemirror/state'
// import type { EditorView, ViewUpdate } from '@codemirror/view'
type Vector2D = { x: number; y: number }

export type MapEvent = {
  (e: 'update:mouse', value: Vector2D): void,
  // (e: 'update:scale', value: number): void,
}