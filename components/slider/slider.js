import { LitElement, html } from 'lit-element';
import { styles, Core as coreStyles, Theme as themeStyles } from './css';

export class Slider extends LitElement {
    static get properties() {
        return {
            'desktop-arrows': { type: Number },
            'desktop-bullets': { type: Number },
            'desktop-items': { type: Number },
            'items-space': { type: Number },
            loaded: { type: Boolean, reflect: true },
            'mobile-arrows': { type: Number },
            'mobile-bullets': { type: Number },
            'mobile-items': { type: Number },
            peek: { type: Number },
            width: { type: Number }
        };
    }
    static get styles() {
        return [
            styles,
            coreStyles,
            themeStyles
        ];
    }
    constructor() {
        super();
        this['desktop-arrows'] = false;
        this['desktop-bullets'] = false;
        this['desktop-items'] = 6;
        this['items-space'] = 16;
        this.loaded = false;
        this['mobile-arrows'] = false;
        this['mobile-bullets'] = false;
        this['mobile-items'] = 2;
        this.peek = 0;
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
    async _initSlider() {
        let rawSlides = this.innerHTML;
        const slides = this.shadowRoot.querySelector('.k-slider__slides');
        slides.innerHTML = rawSlides;
        this.innerHTML = '';
        this.loaded = true;
        await import('@glidejs/glide').then((Module) => {
            const Glide = Module.default;
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
                peek: this.peek,
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
        });
    }
}