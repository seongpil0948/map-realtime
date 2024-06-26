import { shallowRef } from "vue";
import { ImgDict, ImgSrcDict } from "../../../types/resource";
import { ImageConfig, MapDataItem } from "../../../types";
import { getMap } from "../../../mock/api";


export const STATIC_IMG_DICT = Object.freeze({
  "marker": 'map__full--e53.svg',
  "workerIdle": 'worker-idle.svg',
  "workerBusy": 'worker-busy.svg',
  "Marker": 'marker_front.svg',
  "Zone": "zone.svg",
  "ZoneProhibit": "zone_prohibit.svg",
  "ZonePreferred": "zone_preferred.svg",
  "ZoneUnPreferred": "zone_unpreferred.svg",
  "Location": "marker.png",
});
export type ImgKeys = keyof typeof STATIC_IMG_DICT;

export default function useImage() {
  const staticImgs = shallowRef<ImgDict>()
  const getMapImageData = (id: string) => {
    return Promise.resolve(getMap(id).encoded_map)
  }
  const loadMapImage = async (mapData: MapDataItem) => {
    const m = mapData.metadata
    const image = new Image()

    const imageData = await getMapImageData(mapData.id)
    // image.src = `data:image/png;base64,${imageData}`
    image.src = imageData
    const height = m.height_gm
    console.log(m)
    const imgConfig: ImageConfig = {
      name: "map-image",
      width: m.width_gm,
      height: height,
      scaleY: -1,
      // // FIXME(가라) 원래는 height
      offsetY: height * 1.2,
      // offsetX: m.origin_px,
      image: image,
    }
    return imgConfig
  }

  const loadStaticImages = async (): Promise<ImgDict> => new Promise((resolve) => {
    if (staticImgs.value && Object.keys(staticImgs.value).length > 0) return resolve(staticImgs.value as ImgDict)
    const sources: ImgSrcDict = STATIC_IMG_DICT;
    if (!staticImgs.value) staticImgs.value = {} as ImgDict;

    var assetDir = '/';
    var loadedImages = 0;
    var numImages = 0;
    for (var label in sources) {
      numImages++;
    }
    for (var label in sources) {
      const k = label as ImgKeys;
      staticImgs.value![k] = new Image();
      staticImgs.value![k].onload = function () {
        if (++loadedImages >= numImages) {
          resolve(staticImgs.value as ImgDict)
        }
      };
      staticImgs.value![k].src = assetDir + sources[k];
    }
  })
  loadStaticImages()

  return {
    loadMapImage,
    loadStaticImages,

  }
}