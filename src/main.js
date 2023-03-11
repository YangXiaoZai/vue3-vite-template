import { createApp } from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css'; // antd样式
import "normalize.css/normalize.css"; // CSS初始化
import "tailwindcss/tailwind.css"; //tailwind插件
import './style.css'; //公用css


createApp(App).use(Antd).mount('#app');