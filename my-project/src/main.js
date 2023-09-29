// main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Importuj router

createApp(App).use(router).mount('#app') // Użyj routera
