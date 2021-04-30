import { LitElement, html } from 'lit-element';
import { styles } from './css';
export class Banner extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            src: { type: String },
            type: { type: String }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.src = '';
        this.type = 'left';
        this.loaded = false;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        return html `<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? this.getImage(this.src, this.type) : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? this.getImage(this.src, this.type) : ''}
            </div>`;
    }
    getImage (src, type) {
        if (!src.length) return;
        return html`<section class="${type}">
            <k-img src="${src}"></k-img>
        </section>`;
    }
}