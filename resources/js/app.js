import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import TheQrCodeGenerator from './Components/TheQrCodeGenerator.vue'

const pinia = createPinia()
const app = createApp({
    components: {
        TheQrCodeGenerator
    }
})

app.use(pinia)
app.mount('#app')
