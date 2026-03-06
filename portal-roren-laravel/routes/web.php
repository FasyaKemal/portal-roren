<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.home');
});

Route::get('/program/{slug}', function ($slug) {
    $programs = [
        'kinerjaku' => ['name' => 'KinerjaKu', 'desc' => 'Pengelolaan kinerja organisasi terintegrasi untuk seluruh unit kerja KKP.'],
        'knmp' => ['name' => 'Monev KNMP', 'desc' => 'Monitoring & evaluasi KNMP secara periodik dan terstruktur.'],
        'wbk' => ['name' => 'Monev WBK', 'desc' => 'Pemantauan pembangunan Zona Integritas menuju WBK/WBBM.'],
        'phln' => ['name' => 'Monev PHLN', 'desc' => 'Monitoring PHLN & progres pelaksanaan proyek secara komprehensif.'],
    ];

    if (!isset($programs[$slug])) {
        abort(404);
    }

    return view('pages.program', ['program' => $programs[$slug], 'slug' => $slug]);
});
