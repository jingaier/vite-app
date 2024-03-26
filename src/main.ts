/*
 * @Author: Jingaier
 * @Date: 2022-05-07 23:36:15
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-03-08 13:20:38
 * @Descripttion: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Quanju from './components/Quanju.vue'
import bus from "./Bus";
const app = createApp(App)
app.config.globalProperties.$bus = bus
app.component('Quanju',Quanju).use(router).use(ElementPlus).mount('#app')
