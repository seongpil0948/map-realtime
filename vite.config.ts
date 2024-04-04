import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    /* 모바일 화면 확인용 스트립트입니다. */
    host: true, // Host be set to true to use the network form to access project with ip
    cors: true, // cross-domain setting permission
    strictPort: true, // If the port is occupied, exit directly
    /* 모바일 화면 확인용 스트립트입니다. */
    proxy: {
      // '/api/v1': {
      //   target: 'http://localhost:21003/app',
      //   changeOrigin: true,
      //   // path rewrite가 필요할 경우 사용
      //   // rewrite: (path) => path.replace(/^\/api/, ''),
      // },
      "/app/api": {
        target: "https://iabacus.asuscomm.com",
        changeOrigin: true,
      },
    },
  },
});
