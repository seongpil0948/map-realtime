import { defineStore } from "pinia";
import { request } from "../utils/request";

export const useRobotsStatusStore = defineStore("robotsStatus", {
  state: () => {
    return {
      robots: [] as any,
    };
  },
  actions: {
    parseMessage(serviceRobotId: string, message: Buffer) {
      const robot = this.robots.find(
        (x: any) => x.svcRobotId.toString() === serviceRobotId
      );
      // const index = this.robots.indexOf(robot);
      const jsonMsg = JSON.parse(message.toString());

      if (jsonMsg.trdt) robot.robotStateInfHistAttrs.trdt = jsonMsg.trdt;

      if (jsonMsg.btrLvl)
        robot.robotStateInfHistAttrs.batteryLevel = jsonMsg.btrLvl;

      if (jsonMsg.poiKr) robot.robotStateInfHistAttrs.poiKr = jsonMsg.poiKr;

      if (jsonMsg.taskCd) robot.robotStateInfHistAttrs.taskCd = jsonMsg.taskCd;

      if (jsonMsg.taskMsg)
        robot.robotStateInfHistAttrs.taskMsg = jsonMsg.taskMsg;

      if (jsonMsg.robotStateCd)
        robot.robotStateInfHistAttrs.robotStateCd = jsonMsg.robotStateCd;

      // if (robot) {
      //   robot.robotStateInfHistAttrs = JSON.parse(message).attrs
      //   // this.robots.splice(index, 1)
      //   // this.robots.splice(index, 0, robot)
      // }
    },
    setRobots(robots: any[]) {
      this.robots = robots;
    },
    async fetchRobots() {
      const response = await request("/robots/settingRobotList", {
        method: "GET",
        xCommand: "P08006",
      });
      console.log("settingRobotList: ", response.body);
      this.setRobots(response.body.robotList);
    },
    getRobots() {
      return this.robots;
    },
    removeRobots() {
      this.robots = [];
    },
  },
});
