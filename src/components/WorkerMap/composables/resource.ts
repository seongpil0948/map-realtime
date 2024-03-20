import { Ref, shallowRef } from "vue";
import { fetchResources } from "../../../mock/api";
import { API_WORKERS_DATA, CircleConfig, ImageConfig, ImgDict, LineConfig, Resources, WorkerDocument } from "../../../types";
import MapTools from "../utils/map";
import useImage from "./image";

interface Props {
  mTool: Ref<MapTools | undefined>
}
export default function (props: Props) {
  const { mTool } = props;
  const { loadStaticImages } = useImage()

  const pathPlanLocal = shallowRef<CircleConfig[]>([]);
  const pathPlanGlobalCircle = shallowRef<CircleConfig[]>([]);
  const pathPlanGlobalLine = shallowRef<LineConfig[]>([]);
  const workerImgConfigs = shallowRef<ImageConfig[]>([]);
  const markerImgConfigs = shallowRef<ImageConfig[]>([]);
  const locationImgConfigs = shallowRef<ImageConfig[]>([])

  const randomCircleColor = ["#EEF5FC", "#CEE1F7", "#5194E3"];
  const lineColor = "#C4D9F7";
  const circleColor = "#0069FF";

  
  const setWorkers = (data: API_WORKERS_DATA, staticImgs: ImgDict, mTool: MapTools) => {
    for (let i = 0; i < data.length; i++) {
      const worker = data[i];
      const workerImg = getWorkerImageConfig(worker, mTool, staticImgs);
      updatePathPlan(worker, mTool)
      updateWorker(workerImg);
    }
  }

  const setMarkers = (data: Resources, staticImgs: ImgDict, mTool: MapTools) => {
    markerImgConfigs.value = [];
    const image = staticImgs["Marker"];
    for (let idx = 0; idx < data.Marker.length; idx++) {
      const e = data.Marker[idx];
      const lineTolerance = 0.003 // 0.5
      const pose = mTool.transformPoseM2PX(e.pose)
      const parkingOffset = e.parking_offset
      const unparkDistance = e.unpark.distance
      const unparkBackward = e.unpark.backward
      const marker = e.marker_value
      const barrier = e.barrier
      const paramPose = e.param_point.pose
      const paramLandformType = e.param_point.landform.type
      const paramLandformMaxSpeed = e.param_point.landform.max_speed
      const paramLandformMaxAngularSpeed = e.param_point.landform.max_angular_speed
      const gocartMarker = e.gocart_marker
      const chargeable = e.chargeable
      const chargerType = e.charger_type
      const tags = e.tags as any[]
      const lineColor = "#000000"
      const lineWidth = 0.048
      // const lineHeight = 0
      markerImgConfigs.value.push({
        id: e.id,
        image,
        x: pose.x,
        y: pose.y,
        width: 20,
        height: 20,
        offset: {
          x: 10,
          y: 10,
        },
        // fill: 'violet',
      })
    }
  }

  const setLocations = (data: Resources, staticImgs: ImgDict, mTool: MapTools) => {
    const image = staticImgs["Location"]

    for (let idx = 0; idx < data.Location.length; idx++) {
      const e = data.Location[idx];
      const pose = mTool.transformPoseM2PX(e.pose)
      // const lineHeight = 0
      locationImgConfigs.value.push({
        id: e.id,
        image,
        x: pose.x,
        y: pose.y,
        rotation: MapTools.thetaToDegree(pose.theta),
        width: 20,
        height: 20,
        offset: {
          x: 12,
          y: 12,
        },
        // fill: 'violet',
      })
    }
  }

  const setResources = async (resources: Resources) => {
    const staticImgs = await loadStaticImages();
    if (!staticImgs) throw new Error("staticImgs is not loaded");
    else if (!mTool.value) throw new Error("mTool is not loaded");
    setWorkers(resources.Worker, staticImgs, mTool.value);
    setMarkers(resources, staticImgs, mTool.value)
    setLocations(resources, staticImgs, mTool.value)
  }

  const getWorkerImageConfig = (worker: WorkerDocument, mTool: MapTools, staticImgs: ImgDict) => {
    const workerPosition = worker.type_specific.location.pose2d;
    const m2px2DPosition = mTool.transformPointM2PX(workerPosition);
    if (!m2px2DPosition) throw new Error("mTool is not loaded");

    const image =
      worker["status"] === "idle"
        ? staticImgs["workerIdle"]
        : staticImgs["workerBusy"];
    const robotLength = worker.type_specific.robot_info.length || 0.51;
    const robotWidth = worker.type_specific.robot_info.width || 0.73;

    const width = Math.round(robotWidth * mTool.M2PX);
    const length = Math.round(robotLength * mTool.M2PX);
    return {
      id: worker.id,
      image,
      x: m2px2DPosition.x,
      y: m2px2DPosition.y,
      rotation: MapTools.thetaToDegree(workerPosition.theta),
      offset: {
        y: width / 2,
        x: length / 2,
      },
      stroke: "orange",
      strokeWidth: 0,
    }
  }

  const updateWorker = (worker: ImageConfig) => {
    const idx = workerImgConfigs.value.findIndex((w) => w.id === worker.id);
    if (idx === -1) {
      workerImgConfigs.value.push(worker);
    } else {
      workerImgConfigs.value[idx] = worker;
    }
  }

  const handleUpdateWorker = async(rawData: any) => {
    const staticImgs = await loadStaticImages();
    if (!mTool.value) throw new Error("mTool is not loaded");
    const data = getWorkerImageConfig(rawData, mTool.value, staticImgs)

    if(!data) throw new Error("data is not exist")

    updatePathPlan(rawData, mTool.value)
    updateWorker(data)
  }

  const updatePathPlan = (workerData: WorkerDocument, mTool:MapTools) => {
    pathPlanLocal.value = [];
    const ppl = workerData.type_specific.location.path_plan?.local;
    if (ppl) {
      for (let j = 0; j < ppl.length; j++) {
        const p = ppl[j];
        const pos = mTool.transformPointM2PX(p);
        const config: CircleConfig = {
          x: pos.x,
          y: pos.y,
          radius: 2,
          fill: circleColor,
          stroke: circleColor,
          strokeWidth: 1,
          opacity: 0.85,
        };
        pathPlanLocal.value.push(config);
      }
    }

    pathPlanGlobalCircle.value = [];
    pathPlanGlobalLine.value = [];
    const ppg = workerData.type_specific.location.path_plan?.global;

    if (ppg) {
      const globalPath: number[] = [];
      for (let i = 0; i < ppg.length; i++) {
        const p = ppg[i];
        const pos = mTool.transformPointM2PX(p);
        globalPath.push(pos.x), globalPath.push(pos.y);
      }
      const eachGlobalPath: LineConfig = {
        points: globalPath,
        stroke: lineColor,
        strokeWidth: 4,
        opacity: 0.35,
      };
      pathPlanGlobalLine.value.push(eachGlobalPath);

      const movingGPath = ppg[ppg.length - 1];
      const eachMovingGPointPosition = mTool.transformPointM2PX(movingGPath);

      for (let i = 0; i < 3; i++) {
        const eachGlobalPathPoint: CircleConfig = {
          x: eachMovingGPointPosition.x,
          y: eachMovingGPointPosition.y,
          radius: 12 - i * 4,
          fill: randomCircleColor[i],
          opacity: 0.75,
        };
        pathPlanGlobalCircle.value.push(eachGlobalPathPoint);
      }
    }
  }


  fetchResources().then(async (resources) => await setResources(resources));

  return {
    pathPlanLocal,
    pathPlanGlobalCircle,
    pathPlanGlobalLine,
    workerImgConfigs,
    markerImgConfigs,
    locationImgConfigs,
    setResources,
    handleUpdateWorker
  }
}