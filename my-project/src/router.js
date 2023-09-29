// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', component: App }
  // Dodaj tutaj więcej tras w miarę potrzeb
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
