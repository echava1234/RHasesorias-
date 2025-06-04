document.addEventListener('DOMContentLoaded', () => {
    // Reutiliza el contenedor del encabezado si ya existe (evita duplicar)
    const existingHeader = document.querySelector('header'); // Ajusta según tu HTML
    const bg = existingHeader || document.createElement('div');
    
    if (!existingHeader) {
        bg.className = 'interactive-header';
        document.body.prepend(bg);
    }

    function moveBg(x, y) {
        const posX = (x / window.innerWidth) * 20 - 10;
        const posY = (y / window.innerHeight) * 20 - 10;
        bg.style.backgroundPosition = `${50 + posX}% ${50 + posY}%`;
    }

    // Desktop y móvil (igual que antes)
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => moveBg(e.clientX, e.clientY));
    } else {
        document.addEventListener('touchmove', (e) => {
            moveBg(e.touches[0].clientX, e.touches[0].clientY);
            e.preventDefault();
        }, { passive: false });
    }
});