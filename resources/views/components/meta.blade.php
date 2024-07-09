@props(['title' => false, 'description' => false, 'sitename' => true])

@section('meta')
    @if ($title)
        <title>{{ $title }} @if ($sitename) | {{ config('app.name') }} @endif</title>
    @endif

    @if ($description)
    <meta name="description" content="{{ $description }}">
    @endif
@endsection
