/**
 * scroll.js — Apple-style scroll animations
 * Handles: .sa-fade-up .sa-scale .sa-slide-l .sa-slide-r → add .in on enter
 * Also handles legacy .reveal → .active
 * Plus: navbar scroll state, go-top button
 */
document.addEventListener('DOMContentLoaded', () => {

    /* ── All animated elements ── */
    const allSA = document.querySelectorAll('.sa-fade-up, .sa-scale, .sa-slide-l, .sa-slide-r, .reveal');

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in', 'active');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.10, rootMargin: '0px 0px -48px 0px' });

    allSA.forEach(el => io.observe(el));

    /* ── Navbar + go-top scroll handler ── */
    const navbar = document.getElementById('navbar');
    const goTop  = document.getElementById('goTop');

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 80);
        if (goTop) goTop.classList.toggle('visible', y > 400);
    }, { passive: true });

    /* ── Go to top ── */
    if (goTop) {
        goTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ── Clickable portfolio rows ── */
    document.querySelectorAll('.portfolio-item.clickable').forEach(item => {
        const url = item.dataset.href;
        if (!url) return;

        item.addEventListener('click', (e) => {
            // Don't trigger if user clicked a proj-link button inside
            if (e.target.closest('.proj-link, .proj-links-row')) return;
            window.open(url, '_blank');
        });

        // Show pointer cursor feedback
        item.style.cursor = 'pointer';
    });

    // Prevent inner proj-link clicks from bubbling to row
    document.querySelectorAll('.proj-link').forEach(link => {
        link.addEventListener('click', e => e.stopPropagation());
    });
});
