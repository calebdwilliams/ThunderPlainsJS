import { Component } from '../resources/templiteral.es.js';

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
            .then(html => this.innerHTML = html);
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