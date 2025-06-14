import './styles/style.css'
import { createApp } from 'vue'
import { route } from './routes/route.ts'
import App from './App.vue'

createApp(App).use(route).mount('#app')
