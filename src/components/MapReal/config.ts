import type { App } from 'vue'
import { inject } from 'vue'
import type { ConfigProps } from './props'

export const DEFAULT_CONFIG: Readonly<Partial<ConfigProps>> = Object.freeze({
  autofocus: false,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: '',
  autoDestroy: true,
  // extensions: [basicSetup],
})

const CONFIG_SYMBOL = Symbol('map-real-global-config')
export const injectGlobalConfig = (app: App, config?: ConfigProps) => {
  app.provide(CONFIG_SYMBOL, config)
}

export const useGlobalConfig = () => {
  return inject<ConfigProps>(CONFIG_SYMBOL, {} as ConfigProps)
}
