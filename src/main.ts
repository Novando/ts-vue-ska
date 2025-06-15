import './styles/style.css'
import { createApp } from 'vue'
import { route } from './routes/route.ts'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
  .use(route)
  .use(pinia)
  .mount('#app')
