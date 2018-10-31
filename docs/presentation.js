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
        clone.getElementById('neat').innerText = document.getElementById('neat').value;
        target.after(clone);
    },
    buildShadowDOM() {
        const shadowBlock = document.getElementById('shadow-block');
        console.log('yass', shadowBlock)
        shadowBlock.attachShadow({ mode: 'open' });
        shadowBlock.shadowRoot.innerHTML = `
            <style>
                .tomato { color: papayawhip; }
                p { font-size: 3.75vh; line-height: 4.5vh; }
            </style>
            <p class="tomato">This content is papayawhip.</p>
            <slot></slot>
        `;
    }
};

document.addEventListener('submit', event => {
    event.preventDefault();
    const node = document.getElementById('my-template');
    const clone = document.importNode(node.content, true);
    clone.getElementById('neat').innerText = document.getElementById('neat').value;
    event.target.after(clone);
});