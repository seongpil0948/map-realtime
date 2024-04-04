<script setup lang="ts">
import { ref } from "vue";
import { useTokenStore } from "./composables/token";
import { useUserStore } from "./composables/user";
import { useRobotsStatusStore } from "./composables/robots";
import { doLogin } from "./utils/auth";
import { createConnection } from "./utils/websocket";
import mqtt from "mqtt";

const handleLogin = () => doLogin();
const client = ref<mqtt.MqttClient>();
const handleConnect = async () => {
  client.value = await createConnection();
};
const user = useUserStore();
const token = useTokenStore();
const robot = useRobotsStatusStore();
</script>
<template>
  <div>
    <h1>MQTTS Poc</h1>
    <button @click="handleLogin">Login</button>
    <button @click="handleConnect">Connect</button>
    <div v-if="user">
      <h3>Logged</h3>
      <p>in as: {{ JSON.stringify(user, null, 4) }}</p>
      <h3>Token:</h3>
      <p>{{ JSON.stringify(token, null, 4) }}</p>
      <h3>Client:</h3>
      <p>{{ JSON.stringify(client?.connected, null, 4) }}</p>
      <h3>robots</h3>
      <p>{{ JSON.stringify(robot.robots, null, 4) }}</p>
    </div>

    <div></div>
  </div>
</template>
