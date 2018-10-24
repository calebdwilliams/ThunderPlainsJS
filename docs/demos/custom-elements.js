class MyEl extends HTMLElement {
    static get observedAttributes() { return ['title']; }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<h1>Title: <span id="title">Default content</span></h1>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('h1') ? this.shadowRoot.querySelector('#title').innerText = newValue : null;
    }
}

customElements.define('my-el', MyEl);