document.addEventListener('DOMContentLoaded', () => {
    // Lazy Loading
    const lazyLoad = (targets) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '100px' });

        targets.forEach(img => observer.observe(img));
    };

    lazyLoad(document.querySelectorAll('.lazy'));

    // Gestos com Hammer.js
    const hammer = new Hammer(document.body);
    hammer.on('swipeleft', () => toggleDestaques(true));
    hammer.on('swiperight', () => toggleDestaques(false));

    // Event listeners
    document.querySelector('.swipe-overlay').addEventListener('click', () => toggleDestaques(false));
});

function toggleMenu() {
    document.querySelector('aside').classList.toggle('active');
    document.querySelector('.swipe-overlay').classList.toggle('active');
}

function toggleDestaques(show) {
    const destaques = document.getElementById('destaquesContent');
    const main = document.getElementById('mainContent');
    const overlay = document.querySelector('.swipe-overlay');

    if (window.innerWidth > 768) return;

    if (show) {
        destaques.classList.add('active');
        main.style.transform = 'translateX(-100%)';
        overlay.classList.add('active');
    } else {
        destaques.classList.remove('active');
        main.style.transform = '';
        overlay.classList.remove('active');
    }
}

// Suporte a navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleDestaques(false);
        toggleMenu(false);
    }
});