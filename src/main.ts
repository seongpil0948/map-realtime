import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueKonva from "vue-konva";
import MapReal from "./components/MapReal";
import WorkerMap from "./components/WorkerMap";
import MQTTS from "./components/MQTTS";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueKonva);
app.use(MapReal);
app.use(WorkerMap);
app.use(MQTTS);

app.mount("#app");
