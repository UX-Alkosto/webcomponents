import EmblaCarousel from 'embla-carousel'
import { setupPrevNextBtns, disablePrevNextBtns } from "./prevAndNextButtons";

export default class BrandSlider extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles.content.cloneNode(true))
        this._shadowRoot.appendChild(html.content.cloneNode(true))
        this._initSlider()
    }

    connectedCallback() {}

    _initSlider() {
        const wrap = this._shadowRoot.querySelector(".slider");
        const viewPort = wrap.querySelector(".viewport");
        const container = wrap.querySelector(".container");
        const prevBtn = wrap.querySelector(".button--prev");
        const nextBtn = wrap.querySelector(".button--next");
        container.innerHTML = this.innerHTML;
        this.innerHTML = "";
        const slider = EmblaCarousel(viewPort, {
            loop: true,
            containScroll: "keepSnaps"
        });
        const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, slider);

        setupPrevNextBtns(prevBtn, nextBtn, slider);

        slider.on("select", disablePrevAndNextBtns);
        slider.on("init", disablePrevAndNextBtns);
    }
}

const styles = document.createElement('template')
const html = document.createElement('template')

styles.innerHTML = `<style>
    :host {
        display: block;
    }
    .slider {
        position: relative;
        background-color: #f7f7f7;
        padding: 20px;
        max-width: 1204px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
    .viewport {
        overflow: hidden;
        width: 100%;
    }
    .viewport.is-draggable {
        cursor: move;
        cursor: grab;
    }
    .viewport.is-dragging {
        cursor: grabbing;
    }
    .container {
        display: flex;
        margin-left: -10px;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: ease-in-out .25s all;
    }
    .slide {
        display: flex;
        max-width: 100%;
        margin-right: 10px;
        height: auto;
    }
    .button {
        outline: 0;
        cursor: pointer;
        background-color: transparent;
        touch-action: manipulation;
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        border: 0;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        fill: var(--primary-color1);
        padding: 0;
    }
    .button:disabled {
        cursor: default;
        opacity: 0.3;
    }
    .button__svg {
        width: 100%;
        height: 100%;
    }
    .button--prev {
        left: 27px;
    }
    .button--next {
        right: 27px;
    }
</style>`

html.innerHTML = `<div class="slider">
    <div class="viewport">
        <div class="container">
            <slot></slot>
        </div>
    </div>
    <!-- Buttons -->
    <button class="button button--prev" type="button">
        <svg class="button__svg" viewBox="137.718 -1.001 366.563 643.999">
            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"></path>
        </svg>
    </button>
    <button class="button button--next" type="button">
        <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"></path>
        </svg>
    </button>
</div>`