import { createApp } from 'vue'
import './style.css'
import './styles/variables.css'
// removed legacy CSS imports for modular architecture cleanup
import './styles/app-ui.css'
import './styles/utilities.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
