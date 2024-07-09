<div {{ $attributes->merge(['class' => 'container max-w-lg']) }}>
    {{ $slot ?? '' }}
</div>
