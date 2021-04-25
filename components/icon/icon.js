import { LitElement, css, html } from 'lit-element';

export class Icon extends LitElement {
    static get properties() {
        return {
            icon: { type: String, reflect: true },
            loaded: { type: Boolean, reflect: true }
        };
    }
    static get styles() {
        return css`
            :host {
                box-sizing: border-box;
                color: var(--k-icon-color, #E63027);
                display: inline-block;
            }
        `;
    }
    constructor() {
        super();
        this.loaded = false;
        this.target = '';
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        return html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css">
            <span class="${this.icon}"></span>`;
    }
}