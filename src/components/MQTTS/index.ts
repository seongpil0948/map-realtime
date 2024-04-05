import type { Plugin } from "vue";
import Component from "./component.vue";

export const MqTts = Component;
export const install: Plugin = (app) => {
  app.component(Component.name!, Component);
  app.component("MqTts", Component);
};

export default {
  MqTts,
  install,
};
