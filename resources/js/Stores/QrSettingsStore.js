import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const useQrSettingsStore = defineStore('qrSettingsStore', () => {
    const open = ref(true)
    const qrSize = useStorage('qr-size', [150])
    const qrErrorCorrection = useStorage('qr-error-correction', ['H'])
    const qrBackgroundColor = useStorage('qr-background-color', '#ffffff')
    const qrForegroundColor = useStorage('qr-foreground-color', '#000000')

    const fnOpen = () => {
        open.value = true
    }

    const fnClose = () => {
        open.value = false
    }

    const fnReset = () => {
        qrSize.value = [150]
        qrErrorCorrection.value = ['H']
        qrBackgroundColor.value = '#ffffff'
        qrForegroundColor.value = '#000000'
    }

    return {
        open,
        qrSize,
        qrErrorCorrection,
        qrBackgroundColor,
        qrForegroundColor,

        fnOpen,
        fnClose,
        fnReset
    }
})
