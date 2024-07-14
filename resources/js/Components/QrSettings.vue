<script setup>
import { onMounted, ref } from 'vue'
import { Cog6ToothIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useQrSettingsStore } from '../Stores/QrSettingsStore.js'
import { Slider, Select } from '@ark-ui/vue'

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
                class="ark_slider mb-[3rem] block"
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

            <Select.Root class="ark-select" :items="['L', 'M', 'Q', 'H']" v-model="qrSettingsStore.qrErrorCorrection">
                <Select.Label>Error Correction Level</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Select error correction level"/>
                        <Select.Indicator>
                            <ChevronDownIcon/>
                        </Select.Indicator>
                    </Select.Trigger>
                </Select.Control>
                <Teleport to="body">
                    <Select.Positioner class="ark-select">
                        <Select.Content>
                            <Select.Item v-for="item in ['L', 'M', 'Q', 'H']" :key="item" :item="item">
                                <Select.ItemText>{{ item }}</Select.ItemText>
                            </Select.Item>
                        </Select.Content>
                    </Select.Positioner>
                </Teleport>
            </Select.Root>

            <div class="mt-[1rem] flex items-center gap-[1rem]">
                <div>
                    <label for="background" class="text-black-charcoal text-[14px]">Background</label>
                    <div class="block relative mt-[0.5rem]">
                        <input
                            id="background"
                            v-model="qrSettingsStore.qrBackgroundColor"
                            type="text"
                            class="block text-black-charcoal text-[14px] border border-green rounded-[8px] py-[12px] px-[1rem] w-full"
                        >
                        <span class="absolute right-0 top-0 w-[1rem] h-full flex items-center mr-[0.5rem]">
                            <div
                                :style="`background: ${qrSettingsStore.qrBackgroundColor};`"
                                class="w-[1rem] h-[1rem] rounded-full border-none appearance-none pointer-events-none ring-1 ring-gray-200"
                            ></div>
                        </span>
                    </div>
                </div>
                <div>
                    <label for="foreground" class="text-black-charcoal text-[14px]">Foreground</label>
                    <div class="block relative mt-[0.5rem]">
                        <input
                            id="foreground"
                            v-model="qrSettingsStore.qrForegroundColor"
                            type="text"
                            class="block text-black-charcoal text-[14px] border border-green rounded-[8px] py-[12px] px-[1rem] w-full"
                        >
                        <span class="absolute right-0 top-0 w-[1rem] h-full flex items-center mr-[0.5rem]">
                            <div
                                :style="`background: ${qrSettingsStore.qrForegroundColor};`"
                                class="w-[1rem] h-[1rem] rounded-full border-none appearance-none pointer-events-none ring-1 ring-gray-200"
                            ></div>
                        </span>
                    </div>
                </div>
            </div>


            <div class="flex items-center justify-end pt-[1rem]">
                <button
                    @click.prevent="qrSettingsStore.fnReset()"
                    class="bg-gray-200 rounded-full font-bold px-[1rem] py-[0.5rem] text-[14px] ml-auto mr-0 text-black-charcoal hover:bg-green hover:text-white transition-all duration-300 ease-in-out">Reset</button>
            </div>

        </div>
    </Teleport>
</template>
<style scoped>
.ark_slider {
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

.ark-select {
    [data-scope="select"][data-part="label"] {
        @apply text-black-charcoal text-[14px];
    }

    [data-scope="select"][data-part="control"] {
        @apply text-black-charcoal text-[14px] border border-green rounded-[8px] mt-[0.5rem];
    }

    [data-scope="select"][data-part="trigger"] {
        @apply w-full text-left px-[1rem] relative py-[0.75rem];
    }

    [data-scope="select"][data-part="indicator"] {
        @apply absolute right-0 top-0 w-[1rem] h-full flex items-center mr-[0.5rem];

        svg {
            @apply w-[1.5rem] h-[1.5rem] text-green;
        }
    }

    [data-scope="select"][data-part="content"] {
        @apply bg-green-honeydew w-full min-w-[5rem] rounded-[8px] overflow-hidden py-[0.25rem];
    }

    [data-scope="select"][data-part="item"] {
        @apply text-[14px] text-black-charcoal cursor-pointer px-[0.5rem] font-semibold text-green;

        &:hover {
            @apply bg-green text-white;
        }
    }
}
</style>
