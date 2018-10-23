import { Component } from '../resources/templiteral.es.js';

export class ThunderPlainsSlide extends Component {
    static get boundAttributes() { return ['active']; }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.html`
            ${this.if(this.active)`<slot></slot>`}
        `;
    }
}

customElements.define('tp-slide', ThunderPlainsSlide);