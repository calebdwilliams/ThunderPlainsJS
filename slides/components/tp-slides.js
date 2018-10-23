import { Component } from '../resources/templiteral.es.js';

export class ThunderPlainsSlides extends Component {
    static get boundAttributes() {
        return ['current'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.setActive(this.current);
    }

    get slides() {
        return [...this.querySelectorAll('tp-slide')];
    }

    get next() { return +this.current + 1; }
    get nextSlide() { return this.slides[this.next]; }
    get previous() { return +this.current - 1; }
    get previousSlide() { return this.slides[this.previous]; }

    navigate(event) {
        this.setActive(this[event.detail]);
    }

    setActive(index = 0) {
        console.log({index})
        index ? null : index = 0;
        Array.from(this.querySelectorAll('[active]')).forEach(node => node.removeAttribute('active'));
        this.slides[index].active = true;
        this.current = index;
    }

    render() {
        this.html`
            <style>
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-flow: column;
                    height: 100vh;
                    padding: 1rem;
                    position: relative;
                    width: 100vw;
                }
                .next {
                    position: absolute;
                        bottom: 1rem;
                        right: 1rem;
                }
                .previous {
                    position: absolute;
                        bottom: 1rem;
                        left: 1rem;
                }
            </style>
            <div class="container" (slide-nav)="${this.navigate}" (keydown)="${this._onKeyUp}">
                <slot></slot>

                <footer>
                    ${this.if(this.previousSlide)`<tp-button class="previous" label="previous">&larr;</tp-button>`}
                    ${this.if(this.nextSlide)`<tp-button class="next" label="next">&rarr;</tp-button>`}
                </footer>
            </div>
        `;
    }

    _onKeyUp(event) {
        console.log(event);
    }
}

customElements.define('tp-slides', ThunderPlainsSlides);