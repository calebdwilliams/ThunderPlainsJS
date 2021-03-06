import { Component } from '../resources/templiteral.es.js';
import '../resources/highlight/highlight.pack.js';

export class ThunderPlainsSlide extends Component {
    static get boundAttributes() { return ['active', 'template']; }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.template) {
            fetch(this.template)
                .then(res => res.text())
                .then(html => this.innerHTML = html)
                .then(() => {
                    Array.from(this.querySelectorAll('pre > code')).forEach(hljs.highlightBlock);
                });
        }
    }

    render() {
        this.html`
            <style>
                :host([active]) {
                    height: 100%;
                }
            </style>
            ${this.if(this.active)`<slot></slot>`}
        `;
    }
}

customElements.define('tp-slide', ThunderPlainsSlide);