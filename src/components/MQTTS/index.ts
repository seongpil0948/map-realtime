import type { Plugin } from "vue";
import Component from "./component.vue";
import { Props } from "./props";

export const MqTts = Component;
export const install: Plugin = (app, defaultConfig?: Props) => {
  app.component(Component.name, Component);
  app.component("MqTts", Component);
};

export default {
  MqTts,
  install,
};
