import mqtt from 'mqtt';
import { ConfigAMQP } from './types';
import { ref, shallowRef } from 'vue';

interface Props<Message = Record<string, any>> {
  config: ConfigAMQP
  onMessage: (message: Message) => void
}

export function useMqtt<Message = Record<string, any>>(p: Props<Message>) {
  const { config, onMessage } = p;
  const { host, port, topic, ...option } = config;
  const connected = ref(false)


  const ignite = () => {
    const client = mqtt.connect(`ws://${host}:${port}/ws`, option);

    client.on('connect', () => {
      connected.value = true;
      console.log('MQTT ' + host + '에 연결되었습니다.');
      // 토픽 구독
      client.subscribe(topic, (err, granted) => {
        if (err) {
          console.error('토픽 ' + topic + ' 구독 실패 : ', err);
          return;
        }

        console.log('토픽 ' + topic + ' 구독 성공. granted: ', granted);
      });
    });

    client.on('error', (err) => {
      console.error("MQTT 연결 오류 :", err)
    })

    client.on('message', (topic, msg) => {
      try {
        onMessage(JSON.parse(msg.toString()));
      } catch (e) {
        console.error(topic, '토픽 메시지 파싱 오류:', e)
      }
    });

    // 연결 종료 시 이벤트 처리
    client.on('end', () => {
      connected.value = false;
      console.log('MQTT 브로커 연결 종료.');
    });

    const dispose = () => {
      console.log('MQTT 연결 종료')
      client.end()
    }

    return {
      client,
      dispose,
    }
  }

  return {
    ignite
  }

}