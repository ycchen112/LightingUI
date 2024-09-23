import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'
import router from '../src/router';
import Antd from 'ant-design-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(ElementPlus);
app.mount('#app')
