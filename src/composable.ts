import { shallowRef } from "vue";
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