import Glide from '@glidejs/glide';
import { LitElement, css, html } from 'lit-element';
import { Core as coreStyles } from './css/core.js';
import { Theme as themeStyles} from './css/theme.js';

export class Slider extends LitElement {
    static get properties() {
        return {
            'desktop-items': { type: Number, reflect: true },
            'items-space': { type: Number, reflect: true },
            loaded: { type: Boolean, reflect: true },
            'mobile-items': { type: Number, reflect: true },
            width: { type: Number, reflect: true }
        };
    }
    static get styles() {
        return [
            css`:host {
                display: flex;
                flex: 1;
                flex-wrap: no-wrap;
                justify-content: center;
                margin: 0 auto;
                padding: 0 1rem;
            }`,
            coreStyles,
            themeStyles
        ];
    }
    constructor() {
        super();
        this['desktop-items'] = 6;
        this['items-space'] = 16;
        this.loaded = false;
        this['mobile-items'] = 2;
        this.width = 1204;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
        // update columns
        if (name === 'desktop-items') {
            this.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
        }
        // update rows
        else if (name === 'mobile-items') {
            this.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;
        }
    }
    firstUpdated() {
        this._initSlider();
    }
    render() {
        return html`${this._dynamicStyles()}
        <div class="k-slider">
            <div data-glide-el="track" class="k-slider__track">
                <slot class="k-slider__slides"></slot>
            </div>
        </div>`;
    }
    _dynamicStyles() {
        const width = `${(this.width === 0 || this.width === null || this.width === undefined) ? 1204 : this.width}px`;
        return html`<style>
            :host { max-width: ${width}; }
        </style>`;
    }
    _initSlider() {
        let rawSlides = this.innerHTML;
        const slides = this.shadowRoot.querySelector('.k-slider__slides');
        slides.innerHTML = rawSlides;
        this.innerHTML = '';
        this.loaded = true;
        return new Glide(this.shadowRoot.querySelector('.k-slider'), {
            classes: {
                direction: {
                    ltr: 'k-slider--ltr',
                    rtl: 'k-slider--rtl'
                },
                slider: 'k-slider--slider',
                carousel: 'k-slider--carousel',
                swipeable: 'k-slider--swipeable',
                dragging: 'k-slider--dragging',
                cloneSlide: 'k-slider__slide--clone',
                activeNav: 'k-slider__bullet--active',
                activeSlide: 'k-slider__slide--active',
                disabledArrow: 'k-slider__arrow--disabled'
            },
            gap: this['items-space'],
            type: 'carousel',
            peek: 100,
            perView: this['desktop-items'],
            breakpoints: {
                768: {
                    perView: this['mobile-items'],
                    peek: 0
                },
                359: {
                    perView: 1,
                    peek: 0
                }
            }
        }).mount();
    }
}