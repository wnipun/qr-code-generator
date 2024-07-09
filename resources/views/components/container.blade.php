<div {{ $attributes->merge(['class' => 'container max-w-lg px-[1rem]']) }}>
    {{ $slot ?? '' }}
</div>
