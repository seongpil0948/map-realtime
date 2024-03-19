import mqtt from 'mqtt';
import { ref } from 'vue';


interface Props<Message, Topics extends readonly [string, string]> {
  readonly config: mqtt.IClientOptions
  readonly onMessage: (topic: Topics[number], message: Message) => void
  readonly topics: Topics
}

export function useMqtt<Message, Topics extends readonly [string, string] = ['resource', 'worker']>(p: Props<Message, Topics>) {
  const { config, onMessage, topics } = p;
  const { host, port, ...option } = config;
  const connected = ref(false)


  const ignite = () => {
    const client = mqtt.connect(`ws://${host}:${port}/ws`, option);

    client.on('connect', () => {
      connected.value = true;
      console.log('MQTT ' + host + '에 연결되었습니다.');
      // 토픽 구독
      topics.forEach((topic) => {
        client.subscribe(topic, (err, granted) => {
          if (err) {
            console.error('토픽 ' + topic + ' 구독 실패 : ', err);
            return;
          }

          console.log('토픽 ' + topic + ' 구독 성공. granted: ', granted);
        });
      })

    });

    client.on('error', (err) => {
      console.error("MQTT 연결 오류 :", err)
    })

    client.on('offline', () => {
      console.log('MQTT 브로커와 연결이 끊어졌습니다(오프라인).');
    })



    client.on('message', (topic, msg) => {
      try {
        onMessage(topic as Topics[number], JSON.parse(msg.toString()));
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