import { LitElement, css, html } from 'lit-element';

export class Button extends LitElement {
    static get properties() {
        return {
            disabled: { type: Boolean },
            href: { type: String },
            loaded: { type: Boolean, reflect: true },
            icon: { type: String },
            target: { type: String },
            variant: { type: String }
        };
    }
    static get styles() {
        return css`
            :host {
                align-items: center;
                background-color: var(--button-primary-background-color, #E63027);
                border: var(--button-primary-border, 1px solid #E63027);
                border-radius: var(--button-radius, 4px);
                box-sizing: border-box;
                color: var(--button-primary-text-color, #ffffff);
                cursor: pointer;
                display: inline-flex;
                font-family: var(--font-family, 'Arial');
                font-size: 1rem;
                font-weight: bold;
                justify-content: center;
                line-height: 1.125rem;
                min-height: 56px;
                outline: none;
                padding: 16px 24px;
                text-align: center;
                text-decoration: none;
                transition: ease-in-out .3s all;
                width: auto;
            }
            :host([variant=outline]) {
                background-color: var(--button-outline-background-color, transparent);
                border: var(--button-outline-border,1px solid #E63027);
                color: var(--button-outline-text-color, #E63027);
            }
            :host(:focus),
            :host(:hover),
            :host([variant=outline]:focus),
            :host([variant=outline]:hover) {
                background-color: var(--button-primary-background-color-hover, #AB1114);
                border-color: var(--button-primary-background-color-hover, #AB1114);
            }
            :host([variant=outline]:focus),
            :host([variant=outline]:hover) {
                color: var(--button-primary-text-color-hover, #ffffff);
            }
        `;
    }
    constructor() {
        super();
        this.disabled = false;
        this.href = '';
        this.loaded = false;
        this.icon = '';
        this.target = '_self';
        this.variant = 'primary';
        this.addEventListener('click', this._handleClick);
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        return html`<slot class="content"></slot>`;
    }
    _handleClick() {
        if (this.href === '') return;
        return window.open(this.href, this.target);
    }
}