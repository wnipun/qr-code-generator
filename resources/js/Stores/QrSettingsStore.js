import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQrSettingsStore = defineStore('qrSettingsStore', () => {
    const open = ref(false)
    const qrSize = ref([150])

    const fnOpen = () => {
        open.value = true
    }

    const fnClose = () => {
        open.value = false
    }

    return {
        open,
        qrSize,

        fnOpen,
        fnClose
    }
})
