import { LitElement, html } from 'lit';
import { styles } from './css';
export class Banner extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            height: { type: Number },
            src: { type: String },
            type: { type: String }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.height = '';
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
        return html `<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? this.getImage({ height: this.height, src: this.src, type: this.type }) : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? this.getImage({ height: this.height, src: this.src, type: this.type }) : ''}
            </div>`;
    }
    getImage({height, src, type}) {
        if (!src.length) return;
        return html`<section class="${type}">
            <img height="${height}" src="${src}" />
        </section>`;
    }
}