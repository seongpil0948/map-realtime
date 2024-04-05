// MQTT client
import mqtt from "mqtt";
import { useRobotsStatusStore } from "../composables/robots";
import { useUserStore } from "../composables/user";

/**
 * rp/colt/{cucoId}/{estbPlcId}/{svcRobotId}/robotStatus
 * rp/amdt/{cucoId}/{estbPlcId}/{svcRobotId}/anomalyDetection
 * rp/ctrl/{cucoId}/{userId}/{estbPlcId}/{svcRobotId}/control/result
 */

export const createConnection = async () => {
  const robotsStatusStore = useRobotsStatusStore();
  // 현재 최초 로봇 정보들을 가져올 수 없기 때문에 연결만 수행
  const user = useUserStore();

  const options: mqtt.IClientOptions = {
    keepalive: 3,
    host: import.meta.env.VITE_MQTT_HOST,
    clientId: user.mqttDeviceId,
    username: user.userId,
    password: user.mqttPassword,
    protocol: import.meta.env.VITE_MQTT_PROTOCOL,
    path: import.meta.env.VITE_MQTT_PATH,
    reconnectPeriod: 1000,
    transformWsUrl: (url, options, client) => {
      console.debug(options)
      if (client["connackTimer"]) {
        client.options.password = user.mqttPassword;
        client.options.clientId = user.mqttDeviceId;
      }
      return url;
    },
    resubscribe: false,
    clean: false,
  };

  const mqttClient = mqtt.connect(
    `${options.protocol}://${options.host}`,
    options
  );
  try {
    await robotsStatusStore.fetchRobots();
  } catch (e) {
    console.error("error in fetch robots: ", e);
  }
  // let robots = robotsStatusStore.getRobots();
  mqttClient.on("connect", () => {
    console.debug("connected");

    // robots.forEach((robot: any) => {
    //   const statusTopic = `rp/colt/${robot.cucoSiteId}/${robot.estbPlcId}/${robot.svcRobotId}/robotStatus`;
    //   mqttClient.subscribe(statusTopic, (err, granted) => {
    //     if (err) {
    //       console.error("토픽 " + statusTopic + " 구독 실패 : ", err);
    //       return;
    //     }

    //     console.log("토픽 " + statusTopic + " 구독 성공. granted: ", granted);
    //   });
    //   const controlTopic = `rp/ctrl/${robot.cucoSiteId}/${user.userId}/${robot.estbPlcId}/${robot.svcRobotId}/control/result`;
    //   mqttClient.subscribe(controlTopic, (err, granted) => {
    //     if (err) {
    //       console.error("토픽 " + controlTopic + " 구독 실패 : ", err);
    //       return;
    //     }

    //     console.log("토픽 " + controlTopic + " 구독 성공. granted: ", granted);
    //   });
    // });
  });
  mqttClient.on("close", () => {
    console.debug("close");
  });
  mqttClient.on("reconnect", () => {
    console.debug("reconnect");
  });
  mqttClient.on("error", (error: any) => {
    console.debug("error");
    console.debug(error);
  });
  mqttClient.on("message", (topic, message) => {
    console.debug(topic, ">>", message.toString());
    if (topic.startsWith("rp/colt")) {
      const serviceRobotId = topic.split("/")[4];
      robotsStatusStore.parseMessage(serviceRobotId, message);
      // robots = robotsStatusStore.robots;
    }
    if (topic.startsWith("rp/ctrl")) {
      if (JSON.parse(message.toString()).robotCntlStateCd === "FAIL") {
        console.error(
          "로봇에 메시지가 전달되지 못했어요.<br/>[서빙하기]를 다시 한 번 눌러주세요."
        );
      }
    }
    console.debug(message.toString());
  });

  return mqttClient;
};
