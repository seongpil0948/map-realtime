import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueKonva from 'vue-konva';
import MapReal from './components/MapReal';
import WorkerMap from './components/WorkerMap';

const app = createApp(App);
app.use(VueKonva);
app.use(MapReal);
app.use(WorkerMap);
app.mount('#app')