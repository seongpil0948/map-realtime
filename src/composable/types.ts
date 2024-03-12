import mqtt from "mqtt"

export type ConfigAMQP = mqtt.IClientOptions & {
  topic: string
}