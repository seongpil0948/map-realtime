import type { Plugin } from 'vue'
import Component from './component.vue'

export type { Props } from '../WorkerMap/props'

export const WorkerMap = Component
export const install: Plugin = (app) => {
  app.component(Component.name!, Component)
  app.component('WorkerMap', Component)
}

export default {
  WorkerMap,
  install,
}
