import { Component } from '../resources/templiteral.es.js';

export class ThunderPlainsButton extends Component {
    static get boundAttributes() {
        return ['label'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.html`
            <style>
                button {
                    background: transparent;
                    border: 0;
                    color: var(--foregrond);
                    cursor: pointer;
                    font-size: 2rem;
                    opacity: 0.7;
                    transition: 0.2s ease-in transparency;
                }
                button:hover {
                    opacity: 1;
                }
            </style>
            <button aria-label="${this.label}" (click)="${() => this.emit('slide-nav', this.label)}"><slot></slot></button>
        `;
    }
}

customElements.define('tp-button', ThunderPlainsButton);