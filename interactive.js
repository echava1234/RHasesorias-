// interactive.js
document.addEventListener('DOMContentLoaded', function() {
    const interactiveBg = document.createElement('div');
    interactiveBg.className = 'interactive-header';
    document.body.prepend(interactiveBg);

    function moveBackground(x, y) {
        interactiveBg.style.backgroundPosition = `${x}% ${y}%`;
    }

    // Desktop: Mueve con el mouse
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 50; // Reduce movimiento vertical
            moveBackground(x, y);
        });
    }
    // Móvil: Mueve con el dedo
    else {
        document.addEventListener('touchmove', (e) => {
            const x = (e.touches[0].clientX / window.innerWidth) * 100;
            const y = (e.touches[0].clientY / window.innerHeight) * 50;
            moveBackground(x, y);
            e.preventDefault(); // Evita scroll no deseado
        }, { passive: false });
    }
});