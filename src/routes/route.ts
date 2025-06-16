import { createWebHistory, createRouter } from "vue-router"
import FirstPage from "../pages/FirstPage.vue"
import SecondPage from "../pages/SecondPage.vue"

export const route = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: FirstPage},
    {path: "/2nd", component: SecondPage},
  ]
})