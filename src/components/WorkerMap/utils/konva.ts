import { Ref } from "vue";
import { Node, Stage, TextConfig, Vector2D } from "../../../types";
import factory from "./factory";

const isValidStage = (stage: any) => {
  // TODO(임규리): 무조건 stageRef만 들어올 수 있도록
  return true;
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
  console.log("node: ", node);
  const tConfig: TextConfig = {
    ...factory.konva.text(),
    x: rect.x + rect.width / 2,
    y: rect.y - distance,
    text: text(node),
    fill: "black",
    align: "center",
    fontSize: 8,
    ...textConfig,
  };
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
