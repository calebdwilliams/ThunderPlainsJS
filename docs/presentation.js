import './components/tp-slide.js';
import './components/tp-button.js';
import './components/tp-slides.js';

document.addEventListener('keydown', (event) => {
    const { key } = event;
    let detail;
    if (key === 'ArrowRight') {
        detail = 'next';
    } else if (key === 'ArrowLeft') {
        detail = 'previous';
    } else {
        return;
    }

    document.querySelector('tp-slides').navigate({ detail });
});