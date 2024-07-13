<x-layout class="bg-white-ghost">
    <x-meta
        title="Free online QR Code Generator"
        description="Free online qr code generator"
        :sitename="false"
    />

    <x-container class="text-center bg-white max-w-lg rounded-[8px] mt-[2rem]">
        <header class="text-left px-[1rem] pt-[1rem]">
            <span class="font-semibold">QR Code Generator</span>
            <h1 class="font-primary text-black-charcoal text-[12px] leading-6">Generate QR codes using this free online generator</h1>
        </header>

        <the-qr-code-generator>
        </the-qr-code-generator>

    </x-container>

    <footer class="text-center mt-[1rem] text-[14px] leading-tight text-black-charcoal">
        Created by <a href="https://nipun.au" target="_blank" class="text-green hover:underline">Nipun Perera</a>
    </footer>
</x-layout>
