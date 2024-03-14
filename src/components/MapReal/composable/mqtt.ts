import mqtt from 'mqtt';
import { ref } from 'vue';

interface IProps {
  clientId: string
}

export function useMqtt(props: IProps) {
  const connected = ref(false)
  const message = ref('')
  const host = '192.168.0.101';
  const port = '15675'
  const option: mqtt.IClientOptions = {
    username: 'admin',
    password: '0525',
    ...props
  }

  const getClient = () => {
    const client = mqtt.connect(`ws://${host}:${port}/ws`, option);

    client.on('connect', () => {
      connected.value = true;
      console.log('MQTT ' + host + '에 연결되었습니다.');

      // 구독할 토픽 설정
      const topic = 'hello';

      // 토픽 구독
      client.subscribe(topic, (err, granted) => {
        if (err) {
          console.error('토픽 ' + topic + ' 구독 실패 : ', err);
          return;
        }

        console.log('토픽 ' + topic + ' 구독 성공.');
      });
    });

    client.on('error', (err) => {
      console.error("MQTT 연결 오류 :", err)
    })

    client.on('message', (topic, msg) => {
      message.value = msg.toString();
      console.log('토픽 `' + topic + '`에서 메시지 수신:', message.value.toString());
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
    getClient
  }

}