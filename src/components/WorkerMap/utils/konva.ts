import { Ref } from "vue";
import { Node, Stage, TextConfig } from "../../../types";
import factory from "./factory";

const isValidStage = (stage: any) => {
  // TODO(임규리): 무조건 stageRef만 들어올 수 있도록
  if (stage) {
    return true;
  }
};
export const extractStage = (stageRef: Ref<any>) => {
  if (!isValidStage(stageRef.value)) throw new Error("invalid stage");
  return stageRef.value.getStage() as Stage;
};

export const extractNode = (stageRef: Ref<any>) => {
  return stageRef.value.getNode() as Node;
};

export function flipY(node: Node) {
  node.to({
    scaleY: -node.scaleY(),
  });
}

export function rotateNode(node: Node, degree: number) {
  node.to({
    rotation: degree,
  });
}

export function moveNode(node: Node, x: number, y: number) {
  node.to({
    x,
    y,
  });
}

// positionText
// textOnPolygon
// v.offsetX(v.width() / 2), v.offsetY(4);
// E.offsetY(-10),
// (a.degree + 360) % 360 > 190 ? -20 : -10
export function generateObjectLabel({
  konvaEl,
  stageRef,
  place,
  text,
  distance = 10,
  textConfig,
}: {
  konvaEl: any;
  stageRef: Ref<any>;
  place: "top" | "bottom" | "center";
  text: (node: Node) => string;
  distance?: number;
  textConfig?: Partial<TextConfig>;
}): TextConfig {
  const node = konvaEl.getNode() as Node;
  const stage = extractStage(stageRef);
  const rect = node.getClientRect({ relativeTo: stage });
  // console.log("node: ", node, "rect: ", rect);

  const tConfig: TextConfig = {
    ...factory.konva.text(),
    x: rect.x + rect.width / 2,
    y: rect.y,
    text: text(node),
    fill: "black",
    align: "start",
    fontSize: 8,
    ...textConfig,
  };
  // const getTextOffsetY = (theta: number) => {
  //   const t = theta < 0 ? 6.28 + theta : theta;
  //   let offset = -12;
  //   if (t > 0 && t < 3.14) {
  //     offset = 30;
  //   }
  //   return offset;
  // };
  if (node.attrs.rotation) {
    // console.log(node.attrs?.name, node.attrs?.rotation, "generateObjectLabel", place);
    let offsetY = 0;
    const d = node.attrs.rotation;
    if (place === "top") {
      if (-10 > d && d > -180) {
        offsetY = -40;
      } else if (180 > d && d > 10) {
        offsetY = +40;
      } else {
        offsetY = -15;
      }
    } else if (place === "bottom" && 180 > d && d > 350) {
      offsetY = 5;
    }
    console.log("offsetY: ", offsetY);
    // const offsetY = -getTextOffsetY(node.attrs.rotation * (Math.PI / 180));
    tConfig.y! += offsetY;
  }
  if (place === "top") {
    return tConfig;
  } else if (place === "bottom") {
    return {
      ...tConfig,
      y: rect.y + rect.height + distance,
    };
  } else if (place === "center") {
    return {
      ...tConfig,
      y: rect.y + rect.height / 2,
    };
  }
  throw new Error("invalid place");
}
