import type { Plugin } from 'vue'
import type { Props } from './props'
import { injectGlobalConfig } from './config'
import Component from './MapReal.vue'

export type { Props } from './props'

export const MapReal = Component
export const install: Plugin = (app, defaultConfig?: Props) => {
  console.info('installing MapReal', defaultConfig, app, Component)
  app.component(Component.name, Component)
  app.component('MapReal', Component)
  injectGlobalConfig(app, defaultConfig)
}

export default {
  MapReal,
  install,
}
