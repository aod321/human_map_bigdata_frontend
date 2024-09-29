/*
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-23 10:53:35
 * @FilePath: \src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import UnoCSS styles
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
