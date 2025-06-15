import { createWebHistory, createRouter } from 'vue-router'
import FirstPage from '../pages/FirstPage.page.vue'
import SecondPage from '../pages/SecondPage.page.vue'

export const route = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: FirstPage},
    {path: '/2nd', component: SecondPage},
  ]
})