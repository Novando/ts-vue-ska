import { createWebHistory, createRouter } from 'vue-router'
import FirstPage from '../pages/FirstPage.page.vue'

export const route = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: FirstPage},
  ]
})