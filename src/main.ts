import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './styles/variables.css'
import './styles/utilities.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import { useWebSocket } from './composables/useWebSocket'

// Initialize WebSocket connection
const { connectWebSocket } = useWebSocket()
connectWebSocket() // Connect immediately

const app = createApp(App)
// Create and use Pinia store
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
