import type { App } from 'vue'
import { inject } from 'vue'
import type { Props } from './props'
import { IClientOptions } from 'mqtt'
import type { WidthHeightRef, PStageConfig, CircleConfig, TextConfig, LineConfig } from './types'

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
    width: width.value,
    height: height.value,
    draggable: true,
    scaleX: mapProps.scale,
    scaleY: mapProps.scale,
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

export const topicsByHost = (host: string) => {
  switch (host) {
    case '192.168.0.101':
      return ["hello", "worker"] as const
    default:
      throw new Error('unknown host')
  }
}

export const getMqttConfig = (): IClientOptions & { host: string } => ({
  clientId: 'client-' + Math.random().toString(16).substring(2, 8),
  host: '192.168.0.101',
  port: 15675,
  username: 'admin',
  password: '0525',
})

export const getDefaultConfig = {
  props: (): Props => Object.freeze<Props>({
    scale: 1.5,
    canvasStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f0f0',
    },
  }),
  circle: (): CircleConfig => ({
    x: 0,
    y: 0,
    radius: 1,
    fill: "red",
    stroke: "black",
    strokeWidth: 2,
  }),
  text: (): TextConfig => ({
    x: 0,
    y: 0,
    fontFamily: "Calibri",
    fontSize: 12,
    text: "",
    fill: "black",
  }),
  line: (): LineConfig => ({
    points: [],
    dash: [],
    stroke: "pink",
    strokeWidth: 5,
    tension: 0.5,
    lineCap: "round",
    lineJoin: "round",
  })
}