import './components/tp-slide.js';
import './components/tp-button.js';
import './components/tp-slides.js';

/** Demos */
import './demos/custom-elements.js';

window.TEMPLATE_DEMO = (target) => {
    const node = document.getElementById('my-template');
    const clone = document.importNode(node.content, true);
    target.after(clone);
};