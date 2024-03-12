// import type { EditorState } from '@codemirror/state'
// import type { EditorView, ViewUpdate } from '@codemirror/view'

import { Vector2D } from "./types";


export type MapEvent = {
  (e: 'update:mouse', value: Vector2D): void,
  // (e: 'update:scale', value: number): void,
}