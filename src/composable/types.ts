import mqtt from "mqtt"

export type PropsAMQP = mqtt.IClientOptions & {
  topic: string
}