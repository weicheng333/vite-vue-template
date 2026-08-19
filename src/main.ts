import { createApp } from 'vue'
import App from './App.vue'
import InitRouter from './router/InitRouter'
import InitPinia from './stores/InitPinia'
import '@/assets/styles'

const app = createApp(App)
InitPinia(app)
InitRouter(app)

console.log(import.meta.env.VITE_APP_VERSION, '---env')
console.log("newSW")
app.config.errorHandler = (err) => {
  console.log(err)
}
console.log('111')
app.mount('#app')
