import { createApp } from 'vue'
import './style.css'
import './styles/variables.css'
import './styles/layout.css'
import './styles/sections.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
