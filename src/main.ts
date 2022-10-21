/*
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-18 19:57:45
 * @FilePath: \src\main.ts
 */
import { createApp } from 'vue'
import piniaStore from './store'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import './assets/style/index'
// import 'virtual:windi.css'
const app = createApp(App)
// 添加全局属性
app.use(piniaStore)
app.use(router)
app.mount('#app')
