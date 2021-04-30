import { LitElement, html } from 'lit-element';
import { styles } from './css';

export class Image extends LitElement {
    static get properties() {
        return {
            alt: { type: String, reflect: true },
            loaded: { type: Boolean, reflect: true },
            height: { type: Number, reflect: true },
            src: { type: String, reflect: true },
            srcset: { type: String, reflect: true },
            width: { type: Number, reflect: true }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.loaded = false;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        if (this.src === undefined) return;
        this.loaded = true;
        return html`<img loading="lazy" alt="${this.alt || ''}" height="${this.height || ''}" src="${this.src}" srcset="${this.srcset || ''}" width="${this.width || ''}" />`;
    }
}