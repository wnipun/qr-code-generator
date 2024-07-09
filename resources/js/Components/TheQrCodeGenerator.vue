<script setup>
import { ref } from 'vue'
import QrCodeVue from 'qrcode.vue'

const qrValue = ref('https://qrcodegenerator.tech')
const aqSize = ref(150)
const textInput = ref('https://qrcodegenerator.tech')
const inputEmpty = ref(false)

const generate = () => {
    inputEmpty.value = false

    if (textInput.value == '') {
        inputEmpty.value = true
        return
    }

    qrValue.value = textInput.value
}
</script>
<template>
    <div class="mt-[2rem]">
        <div class="pb-[1rem]">
            <QrCodeVue
                :value="qrValue"
                class="border border-gray-200 rounded-md overflow-hidden p-[0.5rem] mx-auto"
                :size="aqSize"
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
            <button @click.prevent="generate()" class="bg-blue-700 text-white font-bold px-[1rem] py-[0.5rem] rounded-[0.25rem] mt-[1rem] mr-auto ml-0">Generate</button>
        </div>
    </div>
</template>

