<script setup>
import { ref } from 'vue'
import QrCodeVue from 'qrcode.vue'
import { watchDebounced } from '@vueuse/core'

const qrValue = ref('https://qrcodegenerator.tech')
const aqSize = ref(150)
const textInput = ref('https://qrcodegenerator.tech')
const inputEmpty = ref(false)

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
        a.download = 'qrcode.png';
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
</script>
<template>
    <div class="mt-[2rem]">
        <div class="pb-[1rem]">
            <QrCodeVue
                :value="qrValue"
                class="border border-gray-200 rounded-md overflow-hidden p-[0.5rem] mx-auto"
                :size="aqSize"
                id="qr-code-canvas"
            ></QrCodeVue>
        </div>
        <div class="border-t-2 border-gray-200 pt-[1rem]">
            <textarea
                v-model="textInput"
                :class="{
                    'outline-red-500 outline': inputEmpty
                }"
                class="border-gray-100 border block p-[0.25rem] w-full min-h-[5rem] text-sm leading-tight"
            >
            </textarea>
            <div class="flex items-center gap-[1rem] justify-center mt-[1rem]">
                <button
                    @click.prevent="download()"
                    class="bg-green-700 hover:bg-green-600 transition-all duration-500 ease-in-out text-white font-bold px-[1rem] py-[0.5rem] rounded-[0.25rem]"
                >
                    Download
                </button>
            </div>
        </div>
    </div>
</template>

