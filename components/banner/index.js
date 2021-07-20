import { LitElement, html } from 'lit';
import { styles } from './css';
export class Banner extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            height: { type: Number },
            src: { type: String },
            type: { type: String },
            width: { type: Number }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.height = 0;
        this.width = null;
        this.loaded = false;
        this.src = '';
        this.type = 'left';
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        return html`${this._dynamicStyles()}<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? this._getImage({ height: this.height, src: this.src, type: this.type }) : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? this._getImage({ height: this.height, src: this.src, type: this.type }) : ''}
            </div>`;
    }
    _dynamicStyles() {
        const width = `${(this.width === null) ? 'flex-basis: 50% !important;' : `flex-basis: ${this.width}px !important;`}`;
        return html`<style>
            @media screen and (min-width: 768px) {
                .left,
                .right {${width}}
            }
        </style>`;
    }
    _getImage({height, src, type}) {
        if (!src.length) return;
        return html`<section class="${type}">
            <img height="${height}" src="${src}" />
        </section>`;
    }
}