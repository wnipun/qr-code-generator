import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const useQrSettingsStore = defineStore('qrSettingsStore', () => {
    const open = ref(true)
    const qrSize = useStorage('qr-size', [150])

    const fnOpen = () => {
        open.value = true
    }

    const fnClose = () => {
        open.value = false
    }

    const fnReset = () => {
        qrSize.value = [150]
    }

    return {
        open,
        qrSize,

        fnOpen,
        fnClose,
        fnReset
    }
})
