export const topicsByHost = (host: string) => {
  switch (host) {
    case '192.168.0.101':
      return ["hello", "worker"] as const
    default:
      throw new Error('unknown host')
  }
}