<script setup>
import { onMounted, ref } from 'vue'
import QrCodeVue from 'qrcode.vue'
import { watchDebounced } from '@vueuse/core'
import DownloadButton from './Buttons/DownloadButton.vue'
import { Tabs } from '@ark-ui/vue'
import QrSettings from './QrSettings.vue'
import { useQrSettingsStore } from '../Stores/QrSettingsStore.js'

const qrSettingsStore = useQrSettingsStore()
const qrValue = ref('https://qrcodegenerator.tech')
const textInput = ref('')
const inputEmpty = ref(false)
const types = ref([
    {
        title: 'Text',
        placeholder: 'Enter text to generate QR code',
    },
    {
        title: 'Url',
        placeholder: 'Enter website url'
    },
])

const selectedTab = ref('Text')
const selectedType = ref({})

const generate = () => {
    inputEmpty.value = false

    if (textInput.value == '') {
        inputEmpty.value = true
        console.log('empty');
        return
    }

    qrValue.value = textInput.value
}

const download = () => {
    let canvasImage = document.getElementById('qr-code-canvas').toDataURL('image/png');
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = `qr_code_${qrSettingsStore.qrSize[0]}.png`;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };
    xhr.open('GET', canvasImage);
    xhr.send();
}

watchDebounced(
    textInput,
    () => generate(),
    { debounce: 500, maxWait: 1000 }
)

onMounted(() => {
    selectedType.value = types.value[0]
})

const changeType = (type) => {
    selectedType.value = type
    selectedTab.value = type.title
}
</script>
<template>
    <div class="mt-[3rem]">
        <QrSettings />

        <div>
            <QrCodeVue
                :value="qrValue"
                class="border border-gray-200 rounded-md overflow-hidden p-[0.5rem] mx-auto"
                :size="qrSettingsStore.qrSize[0]"
                :level="qrSettingsStore.qrErrorCorrection[0]"
                id="qr-code-canvas"
            ></QrCodeVue>
        </div>
        <div class="mt-[3rem]">
            <div class="flex items-center gap-[0.5rem] text-[14px] px-[1rem]">
                <button
                    v-for="type in types"
                    :key="type.title"
                    v-text="type.title"
                    class="font-bold text-center uppercase rounded-full px-[1rem] py-[0.5rem] leading-tight text-[12px]"
                    :class="{
                        'text-green bg-green-honeydew': selectedTab != type.title,
                        'text-white bg-green': selectedTab == type.title
                    }"
                    @click.prevent="changeType(type)"
                ></button>
            </div>
            <div class="transition-all duration-500 ease-in-out px-[1rem] mb-[1.5rem]">
                <Tabs.Root v-model="selectedTab">
                    <Tabs.Content value="Text">
                        <textarea
                            v-model="textInput"
                            class="block w-full min-h-[5rem] text-base leading-tight p-[0.75rem] mt-[1.5rem] border-2 border-gray-200 rounded-[8px] text-black-charcoal"
                            :placeholder="selectedType.placeholder"
                        >
                        </textarea>
                    </Tabs.Content>
                    <Tabs.Content value="Url">
                        <input
                            v-model="textInput"
                            :placeholder="selectedType.placeholder"
                            class="w-full text-base leading-tight p-[0.75rem] mt-[1rem] border-2 border-gray-200 rounded-[8px] text-black-charcoal"
                            type="url"
                        />
                    </Tabs.Content>
                </Tabs.Root>

            </div>
            <div class="flex items-center gap-[1rem] justify-center px-[1rem] pb-[1rem]">
                <DownloadButton @click.prevent="download()" />
            </div>
        </div>
    </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
