import './components/tp-slide.js';
import './components/tp-button.js';
import './components/tp-slides.js';

/** Demos */
import './demos/custom-elements.js';

window.DEMO_FUNCTIONS = {
    myEl(target) {
        document.querySelector('my-el').setAttribute('title', target.value);
        document.getElementById('title').innerHTML = ` title${target.value ? `="${target.value}"` : ''}`;
    },
    templateDemo(target) {
        const node = document.getElementById('my-template');
        const clone = document.importNode(node.content, true);
        target.after(clone);
    }

};