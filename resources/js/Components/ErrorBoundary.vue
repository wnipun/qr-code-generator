<script setup>
import { ref, onErrorCaptured } from 'vue'
import { useQrSettingsStore } from '../Stores/QrSettingsStore.js'

const props = defineProps({
    modelValue: {
        type: String,
        default: () => null
    }
})

const qrSettingsStore = useQrSettingsStore()

const _errorMessage = ref('')
const emit = defineEmits(['update:modelValue'])

onErrorCaptured((error, vm, info) => {
    _errorMessage.value = info
    emit('update:modelValue', error)
    return false
})
</script>
<template>
    <div v-if="props.modelValue" class="px-[1rem]">
        <div
            class="border border-gray-200 rounded-md overflow-hidden p-[0.5rem] mx-auto"
            :style="`height:${qrSettingsStore.qrSize[0]}px; width:${qrSettingsStore.qrSize[0]}px;`"
        ></div>
        <div
            v-if="props.modelValue == 'RangeError: Data too long'"
            class="text-red-500 block rounded-[4px] py-[0.25rem] text-[12px] font-bold mt-[1rem]"
        >Data too long</div>
        <div v-else v-text="props.modelValue"></div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>
