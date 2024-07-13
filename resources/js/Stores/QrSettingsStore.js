import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const useQrSettingsStore = defineStore('qrSettingsStore', () => {
    const open = ref(false)
    const qrSize = useStorage('qr-size', [150])
    const qrErrorCorrection = useStorage('qr-error-correction', ['H'])

    const fnOpen = () => {
        open.value = true
    }

    const fnClose = () => {
        open.value = false
    }

    const fnReset = () => {
        qrSize.value = [150]
        qrErrorCorrection.value = ['H']
    }

    return {
        open,
        qrSize,
        qrErrorCorrection,

        fnOpen,
        fnClose,
        fnReset
    }
})
