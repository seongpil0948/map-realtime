import type { App, CSSProperties } from 'vue'
import { inject } from 'vue'
import type { Props } from './props'
import { PStageConfig, WidthHeightRef } from './types'
import { ConfigAMQP } from '../../composable/types'

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

export const getStageConfig = (mapProps: Props, windowSize: WidthHeightRef): PStageConfig => {
  const { width, height } = windowSize
  return {
    width: width.value * 2,
    height: height.value * 2,
    draggable: true,
    scaleX: mapProps.scale,
    scaleY: mapProps.scale
  }
}

export const getMapSize = (windowSize: WidthHeightRef) => {
  const { width, height } = windowSize
  return {
    width: width.value,
    height: height.value,
    x: 0,
    y: 0
  }
}

export const getMqttConfig = (topic: string = 'hello'): ConfigAMQP => ({
  clientId: 'client-' + Math.random().toString(16).substring(2, 8),
  topic,
  host: '192.168.0.101',
  port: 15675,
  username: 'admin',
  password: '0525',
})