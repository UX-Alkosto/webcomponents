import { LitElement, css, html } from 'lit-element';

export class Link extends LitElement {
    static get properties() {
        return {
            href: { type: String, reflect: true },
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
                color: var(--primary-color2);
                text-decoration: underline;
            }
            span {
                color: var(--primary-color1);
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
    render() {
        this.loaded = true;
        const icon = (this.hasAttribute('icon')) ?
            html`<span id="icon" class="${this.icon}"></span>` :
            '';
        return html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css">
        <a href="${this.href}" target="${this.target}" title="${this.title}">
            <slot class="content"></slot>
            ${icon}
        </a>`;
    }
    _setIconStyles(){
        // if (this._shadowRoot.querySelectorAll('#icon-styles').length) return;
        // const iconStyles = document.createElement('link');
        // Object.assign(iconStyles, {
        //     id: 'icon-styles',
        //     rel: 'stylesheet',
        //     href: 'https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css'
        // });
        // return this._shadowRoot.appendChild(iconStyles);
    }
}