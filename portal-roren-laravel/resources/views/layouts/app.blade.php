<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="RORENOne — Portal Program Biro Perencanaan Kementerian Kelautan dan Perikanan">
    <title>RORENOne — Portal Program Biro Perencanaan KKP</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    @include('partials.loading')
    @include('partials.navbar')

    <main class="min-h-screen bg-white">
        @yield('content')
    </main>

    @include('partials.footer')
    @include('partials.scroll-to-top')

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
