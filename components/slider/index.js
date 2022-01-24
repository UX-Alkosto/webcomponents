import { LitElement, html } from 'lit';
import Glide from '@glidejs/glide';
import { common } from '../common';
import { styles, Core as coreStyles, Theme as themeStyles } from './css';

export class Slider extends LitElement {
    static get properties() {
        return {
            'arrows': { type: Boolean },
            'bullets': { type: Boolean },
            'desktop-arrows': { type: Boolean },
            'desktop-bullets': { type: Boolean },
            'desktop-items': { type: Number },
            'items-space': { type: Number },
            loaded: { type: Boolean, reflect: true },
            'mobile-arrows': { type: Boolean },
            'mobile-bullets': { type: Boolean },
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
        this.arrows = false;
        this.bullets = false;
        this.countSlides = this.childElementCount;
        this['desktop-arrows'] = false;
        this['desktop-bullets'] = false;
        this['desktop-items'] = 6;
        this['items-space'] = 16;
        this.loaded = false;
        this['mobile-arrows'] = false;
        this['mobile-bullets'] = false;
        this['mobile-items'] = 2;
        this.peek = 0;
        this.width = common.defaultMaxWidth;
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
        this.arrows = isTrueSet(this.getAttribute('arrows'));
        this['desktop-arrows'] = isTrueSet(this.getAttribute('desktop-arrows')) ?
            true : this.arrows;
        this['desktop-bullets'] = isTrueSet(this.getAttribute('desktop-bullets')) ?
            true : this.bullets;
        this['mobile-arrows'] = isTrueSet(this.getAttribute('mobile-arrows')) ?
            true : this.arrows;
        this['mobile-bullets'] = isTrueSet(this.getAttribute('mobile-bullets')) ?
            true : this.bullets;
        this._initSlider();
    }
    render() {
        return html`${this._dynamicStyles()}
        <div class="k-slider">
            <div data-glide-el="track" class="k-slider__track">
                <slot class="k-slider__slides"></slot>
            </div>
            ${(this['desktop-arrows'] || this['mobile-arrows']) ? this._getArrows() : ''}
            ${(this['desktop-bullets'] || this['mobile-bullets']) ? this._getDots() : ''}
        </div>`;
    }
    _dynamicStyles() {
        const width = `${(this.width === 0 || this.width === null || this.width === undefined) ? 1204 : this.width}`;
        return html`<style>
            :host {
                max-width: ${width}px;
            }
        </style>`;
    }
    _getArrows() {
        return html`<div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><k-icon icon="alk-icon-izquierda"></k-icon></button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><k-icon icon="alk-icon-derecha"></k-icon></button>
        </div>`;
    }
    _getDots() {
        const bullets = [];
        for (let index = 0; index < this.countSlides; index++) {
            bullets.push(html`<button class="glide__bullet" data-glide-dir="=${index}"></button>`);
        }
        return html`<div class="glide__bullets" data-glide-el="controls[nav]">
            ${bullets}
        </div>`;
    }
    async _initSlider() {
        let rawSlides = this.innerHTML;
        const slides = this.shadowRoot.querySelector('.k-slider__slides');
        slides.innerHTML = rawSlides;
        this.innerHTML = '';
        this.loaded = true;
        return new Glide(this.shadowRoot.querySelector('.k-slider'), {
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
    }
}

function isTrueSet(value = '') {
    if(typeof value !== 'string') return false;
    return value.toLowerCase() === 'true' && true;
}
