import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

import Antd from "ant-design-vue";

import "normalize.css/normalize.css"; // CSS初始化
import "tailwindcss/tailwind.css"; //tailwind插件
import "ant-design-vue/dist/antd.less"; // antd样式

import "./style.css"; //公用css

createApp(App).use(router).use(Antd).mount("#app");
