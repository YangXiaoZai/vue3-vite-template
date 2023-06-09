import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

//引入自动引入插件
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "/assets": path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1890ff",
        },
        javascriptEnabled: true,
      },
    },
  },
  // server: {
  // host: "192.168.0.24",
  // port: 8848,
  // },
});
