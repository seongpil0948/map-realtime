import type { App, CSSProperties } from 'vue'
import { inject } from 'vue'
import type { Props } from './props'

export const DEFAULT_CONFIG = Object.freeze<Props>({
  scale: 1.5,
  canvasStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
})

const CONFIG_SYMBOL = Symbol('map-real-global-config')
export const injectGlobalConfig = (app: App, config?: Props) => {
  app.provide(CONFIG_SYMBOL, config)
}

export const useGlobalConfig = () => {
  return inject<Props>(CONFIG_SYMBOL, {} as Props)
}
