import type { Plugin } from 'vue'
import type { Props } from '../WorkerMap/props'
import Component from './component.vue'

export type { Props } from '../WorkerMap/props'

export const WorkerMap = Component
export const install: Plugin = (app, defaultConfig?: Props) => {
  console.info('installing WorkerMap', defaultConfig, app, Component)
  app.component(Component.name, Component)
  app.component('WorkerMap', Component)
}

export default {
  WorkerMap,
  install,
}
