@extends('layouts.app')

@section('content')
<section class="program-detail-section" style="padding: 8rem 0 4rem; min-height: 60vh;">
    <div class="section-container">
        <div class="animate-on-scroll" style="max-width: 48rem;">
            <a href="/" style="display: inline-flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--ocean); font-weight: 600; margin-bottom: 1.5rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Kembali ke Beranda
            </a>
            <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--navy); margin-bottom: 1rem;">{{ $program['name'] }}</h1>
            <p style="font-size: 1.125rem; color: #64748b; line-height: 1.7; margin-bottom: 2rem;">{{ $program['desc'] }}</p>
            <div style="background: var(--softbg); border-radius: 20px; padding: 2rem; border: 1px solid #f1f5f9;">
                <p style="color: #94a3b8; font-size: 0.875rem;">Halaman detail program <strong style="color: var(--navy);">{{ $program['name'] }}</strong> sedang dalam pengembangan.</p>
            </div>
        </div>
    </div>
</section>
@endsection
