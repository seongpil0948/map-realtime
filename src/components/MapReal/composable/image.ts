import { shallowRef } from "vue";
import { ImgDict, ImgSrcDict } from "../types";


const STATIC_IMG_DICT = Object.freeze({
  "marker": 'map__full--e53.svg',
  "workerIdle": 'worker-idle.svg',
  "workerBusy": 'worker-busy.svg',
});
export type ImgKeys = keyof typeof STATIC_IMG_DICT;

export default function useImage() {
  const images = shallowRef<ImgDict>()

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
    if (!images.value) images.value = {} as ImgDict;

    var assetDir = '/';
    var loadedImages = 0;
    var numImages = 0;
    for (var label in sources) {
      numImages++;
    }
    for (var label in sources) {
      const k = label as ImgKeys;
      images.value![k] = new Image();
      images.value![k].onload = function () {
        if (++loadedImages >= numImages) {
          callback(images.value as ImgDict);
        }
      };
      images.value![k].src = assetDir + sources[k];
    }
  }


  return {
    images,
    loadImage,
    loadImages,

  }
}