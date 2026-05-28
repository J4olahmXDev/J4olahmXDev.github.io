document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initTerminal, 500);

    /* Active nav */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        let cur = '';
        sections.forEach(s => { if (s.getBoundingClientRect().top <= 130) cur = s.id; });
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === cur));
    }
    window.addEventListener('scroll', highlightNav, { passive: true });

    /* Typewriter */
    const el = document.getElementById('typedRole');
    if (el) {
        const words = ['Problem Solver', 'IE Developer', 'System Builder', 'Retro Modder', 'Swift Developer'];
        let wi = 0, ci = 0, del = false;
        function loop() {
            const w = words[wi];
            if (!del) {
                el.textContent = w.slice(0, ci + 1); ci++;
                if (ci === w.length) { del = true; setTimeout(loop, 2400); return; }
                setTimeout(loop, 90);
            } else {
                el.textContent = w.slice(0, ci - 1); ci--;
                if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
                setTimeout(loop, 50);
            }
        }
        setTimeout(loop, 600);
    }

    /* Progress bars — upcoming cards */
    const bars = document.querySelectorAll('.progress-fill');
    const bo = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.width = getComputedStyle(e.target).getPropertyValue('--w').trim();
                bo.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });
    bars.forEach(b => { b.style.width = '0'; bo.observe(b); });

    /* Skill level bars */
    const sbars = document.querySelectorAll('.skill-bar-fill');
    const sbo = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.width = getComputedStyle(e.target).getPropertyValue('--sw').trim();
                sbo.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    sbars.forEach(b => { b.style.width = '0'; sbo.observe(b); });
});
