import { onBeforeUnmount, shallowRef, watchEffect } from "vue";
import { ImgDict, ImgSrcDict } from "./types";

export function useKonv() {

  const images = shallowRef<ImgDict>({})

  const loadImage = (props: {
    src: string,
    width: number,
    height: number,
  }): HTMLImageElement => {
    const image = new Image()
    image.src = props.src
    image.width = props.width
    image.height = props.height
    return image
  }

  const loadImages = (callback: (images: ImgDict) => void) => {
    const sources: ImgSrcDict = STATIC_IMG_DICT;
    var assetDir = '/';
    var loadedImages = 0;
    var numImages = 0;
    for (var label in sources) {
      numImages++;
    }
    for (var label in sources) {
      images.value[label] = new Image();
      images.value[label].onload = function () {
        if (++loadedImages >= numImages) {
          callback(images.value as ImgDict);
        }
      };
      images.value[label].src = assetDir + sources[label];
    }
  }


  return {
    images,
    loadImage,
    loadImages,

  }
}


const STATIC_IMG_DICT = {
  "marker": 'map__full--e53.svg',
};
// type TStaticImageDict = typeof STATIC_IMG_DICT;

type TMessage = any
export function useMsgQueue() {
  const wsbroker = '192.168.0.101';  //mqtt websocket enabled broker
  const wsport = 15675; // port for above
  const topic = "hello";

  const msgQueue = shallowRef<TMessage[]>([])

  const addMsg = (msg: TMessage) => {
    msgQueue.value.push(msg)
  }

  const clearMsg = () => {
    msgQueue.value = []
  }

  const getClient = (clientId: string) => {
    const client = new Paho.MQTT.Client(wsbroker, wsport, "/ws", clientId);
    const send = function (data: any) {
      const message = new Paho.MQTT.Message(data);
      message.destinationName = topic;
      console.log("SEND ON " + message.destinationName + " PAYLOAD " + data);
      client.send(message);
    };

    client.onConnectionLost = function (responseObject) {
      console.log("CONNECTION LOST - " + responseObject.errorMessage);
    };

    client.onMessageArrived = function (message: any) {
      console.log("qos", message.qos, "retained", message.retained, "duplicate", message.duplicate)
      try {
        const p = JSON.parse(message.payloadString);
        console.info("parsed", p);
        addMsg(p)
      } catch (e) {
        console.error("Error parsing message", e)
      }
    };

    var options: any = {
      timeout: 3,
      keepAliveInterval: 30,
      userName: 'admin',
      password: '0525',
      onSuccess: function () {
        console.log("CONNECTION SUCCESS");
        send("from browser")
        client.subscribe(topic, {
          onSuccess: function () {
            console.log("Successfully subscribed to 'hello' queue");
          },
          onFailure: function (error: any) {
            console.log("Subscription failed:", error.errorMessage);
          }
        });
      },
      onFailure: function (message: any) {
        console.log("CONNECTION FAILURE - " + message.errorMessage);
      }
    };

    if (location.protocol == "https:") {
      options.useSSL = true;
    }
    const dispose = () => {
      client.unsubscribe(topic)
      client.disconnect()
    }
    const connect = () => {
      console.log("CONNECT TO " + wsbroker + ":" + wsport);
      client.connect(options);
    }

    watchEffect(() => {
      if (msgQueue.value.length > 0) {
        console.log(msgQueue.value)
      }
    })


    return {
      client,
      send,
      dispose,
      connect
    }
  }

  return {
    msgQueue,
    addMsg,
    clearMsg,
    getClient
  }
}