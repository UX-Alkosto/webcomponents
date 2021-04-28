import { LitElement, css, html } from 'lit-element';

export class Link extends LitElement {
    static get properties() {
        return {
            href: { type: String },
            icon: { type: String, reflect: true },
            loaded: { type: Boolean, reflect: true },
            title: { type: String },
            target: { type: String }
        };
    }
    static get styles() {
        return css`
            :host {
                align-items: center;
                cursor: pointer;
                display: inline-block;
            }
            a {
                color: var(--primary-color2, #004691);
                text-decoration: underline;
            }
        `;
    }
    constructor() {
        super();
        this.href = '#';
        this.icon = '';
        this.loaded = false;
        this.target = '_self';
        this.title = '';
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        const icon = (this.hasAttribute('icon')) ?
            html`<k-icon icon="${this.icon}"></k-icon>` :
            '';
        return html`<a href="${this.href}" target="${this.target}" title="${this.title}">
            <slot class="content"></slot>
            ${icon}
        </a>`;
    }
}