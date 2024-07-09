import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler'
import TheQrCodeGenerator from './Components/TheQrCodeGenerator.vue'

const app = createApp({
    components: {
        TheQrCodeGenerator
    }
})

app.mount('#app')
