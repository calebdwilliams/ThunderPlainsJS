import { Component } from '../resources/templiteral.es.js';

export class ThunderPlainsSlides extends Component {
    static get observedAttributes() {
        return ['current'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._searchParams = new URLSearchParams(window.location.search);
    }

    connectedCallback() {
        super.connectedCallback();
        this.current = this.current || this._searchParams.get('slide') || 0;

        /** 
         * Make sure the call site is correct
         * and add the listener 
         */
        this._onDocumentKeyUp = this._onDocumentKeyUp.bind(this);
        document.addEventListener('keydown', this._onDocumentKeyUp);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('keydown', this._onDocumentKeyUp);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'current' && newValue !== oldValue) {
            this.current = newValue;
        }
    }

    get slides() {
        return [...this.querySelectorAll('tp-slide')];
    }

    get current() {
        return this.getAttribute('current') || 0;
    }

    set current(index) {
        if (this.slides[index]) {
            this.setActive(index);
            this.setAttribute('current', index || 0);
        }
    }

    get next() { return +this.current + 1; }
    get nextSlide() { return this.slides[this.next]; }
    get previous() { return +this.current - 1; }
    get previousSlide() { return this.slides[this.previous]; }

    navigate(event) {
        this.current = this[event.detail];
    }

    setActive(index = 0) {
        index ? null : index = 0;
        if (this.slides[index]) {
            Array.from(this.querySelectorAll('[active]')).forEach(node => node.removeAttribute('active'));
            this.slides[index].active = true;
            this._searchParams.set('slide', index.toString());
            window.history.replaceState({}, '', location.pathname + '?' + this._searchParams);
        }
    }

    render() {
        this.html`
            <style>
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-flow: column;
                    height: 92vh;
                    overflow-y: scroll;
                    padding: 1rem;
                    position: relative;
                    width: 100vw;
                }
                footer {
                    display: flex;
                    justify-content: space-between;
                    position: fixed;
                        bottom: 2vh;
                    width: calc(100% - 3vh);
                }
            </style>
            <main class="container" (slide-nav)="${this.navigate}" (keydown)="${this._onKeyUp}">
                <slot></slot>

                <footer>
                    <tp-button class="previous" label="previous">&larr;</tp-button>
                    <tp-button class="next" label="next">&rarr;</tp-button>
                </footer>
            </main>
        `;
    }

    _onDocumentKeyUp(event) {
        const { key } = event;
        let detail;
        if (key === 'ArrowRight') {
            detail = 'next';
        } else if (key === 'ArrowLeft') {
            detail = 'previous';
        } else {
            return;
        }
    
        this.navigate({ detail });
    }
}

customElements.define('tp-slides', ThunderPlainsSlides);