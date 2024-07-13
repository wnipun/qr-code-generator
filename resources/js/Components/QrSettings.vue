<script setup>
import { onMounted, ref } from 'vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useQrSettingsStore } from '../Stores/QrSettingsStore.js'
import { Slider } from '@ark-ui/vue'

const mounted = ref(false)
const qrSettingsStore = useQrSettingsStore()

onMounted(() => {
    mounted.value = true
})

const qrSizeOnChange = (newValue) => {
    qrSettingsStore.qrSize = newValue.value
}
</script>
<template>
    <Teleport
        v-if="mounted"
        to="#home-container"
    >
        <button
            @click.prevent="qrSettingsStore.fnOpen()"
            class="absolute right-0 top-0 hover:bg-green-honeydew p-[0.25rem] rounded-full text-black-charcoal transition-all duration-500 ease-in-out bg-gray-100 mr-[1rem] mt-[1rem]">
            <Cog6ToothIcon class="w-[1.5rem] h-[1.5rem]"/>
        </button>
        <button
            v-if="qrSettingsStore.open"
            @click.prevent="qrSettingsStore.fnClose()"
            class="absolute right-0 top-0 hover:bg-green-honeydew p-[0.25rem] rounded-full text-black-charcoal transition-all duration-300 ease-in-out bg-gray-100 mr-[1rem] mt-[1rem] z-[1]">
            <XMarkIcon class="w-[1.5rem] h-[1.5rem]" />
        </button>
        <div
            :class="{
                'translate-x-[100%]': !qrSettingsStore.open
            }"
            class="absolute left-0 top-0 w-full h-full rounded-[8px] transition-all transform-gpu duration-300 ease-in-out bg-white text-left px-[2rem]"
        >
            <h2 class="text-base leading-tight text-black-charcoal font-semibold text-center pb-[3rem] pt-[1.5rem]">Settings</h2>

            <Slider.Root
                :model-value="qrSettingsStore.qrSize"
                class="qs_slider mb-[3rem] block"
                :min="100"
                :max="448"
                @value-change-end="(details) => qrSizeOnChange(details)"
            >
                <div class="flex items-center justify-between">
                    <Slider.Label>QR Image Size</Slider.Label>
                    <span class="text-green bg-green-honeydew rounded-full px-[0.5rem] font-semibold text-[14px]">
                        <Slider.ValueText />px
                    </span>
                </div>

                <Slider.Control>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <slider.Thumb :index="0"/>
                </Slider.Control>
                <slider.MarkerGroup>
                    <Slider.Marker :value="100">100px</Slider.Marker>
                    <Slider.Marker :value="150">150px</Slider.Marker>
                    <Slider.Marker :value="448">448px</Slider.Marker>
                </slider.MarkerGroup>
            </Slider.Root>

            <div class="flex items-center justify-end pt-[1rem]">
                <button
                    @click.prevent="qrSettingsStore.fnReset()"
                    class="bg-gray-200 rounded-full font-bold px-[1rem] py-[0.5rem] text-[14px] ml-auto mr-0 text-black-charcoal hover:bg-green hover:text-white transition-all duration-300 ease-in-out">Reset</button>
            </div>

        </div>
    </Teleport>
</template>
<style scoped>
.qs_slider {
    [data-scope="slider"][data-part="label"] {
        @apply text-black-charcoal text-[14px];
    }

    [data-scope="slider"][data-part="track"] {
        @apply bg-green-honeydew h-[0.5rem] rounded mt-[1rem];
    }

    [data-scope="slider"][data-part="thumb"] {
        @apply bg-green w-[1rem] h-[1rem] rounded-full cursor-grabbing absolute top-0 mt-[-4px];
    }

    [data-scope="slider"][data-part="marker"] {
        @apply text-[12px] text-black-charcoal mt-[0.5rem];
    }
}
</style>
