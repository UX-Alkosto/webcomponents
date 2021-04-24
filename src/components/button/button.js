import { LitElement, css, html } from "lit-element";

export class Button extends LitElement {
    static get properties() {
        return {
            href: { type: String },
            loaded: { type: Boolean, reflect: true },
            icon: { type: String },
            target: { type: String },
            variant: { type: String }
        }
    }
    static get styles() {
        return css`
            :host {
                box-sizing: border-box;
                display: inline-flex;
                cursor: pointer;
                font-family: var(--font-family, 'Arial');
                outline: none;
                width: auto;
            }
            a {
                align-items: center;
                background-color: var(--button-primary-background-color, #E63027);
                border: var(--button-primary-border, 1px solid #E63027);
                border-radius: var(--button-radius, 4px);
                box-sizing: border-box;
                color: var(--button-primary-text-color, #ffffff);
                cursor: pointer;
                display: flex;
                flex: 1;
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
                width: 100%;
            }
            :host([variant=outline]) a {
                background-color: var(--button-outline-background-color, transparent);
                border: var(--button-outline-border,1px solid #E63027);
                color: var(--button-outline-text-color, #E63027);
            }
            :host(:focus) a,
            :host(:hover) a,
            a:focus,
            a:hover,
            :host([variant=outline]) a:focus,
            :host([variant=outline]) a:hover {
                background-color: var(--button-primary-background-color-hover, #AB1114);
                border-color: var(--button-primary-background-color-hover, #AB1114);
            }
            :host([variant=outline]:focus) a,
            :host([variant=outline]:hover) a,
            :host([variant=outline]) a:focus,
            :host([variant=outline]) a:hover {
                color: var(--button-primary-text-color-hover, #ffffff);
            }
        `;
    }
    constructor() {
        super()
        this.href = ""
        this.loaded = false
        this.target = ""
        this.variant = "primary"
    }
    render() {
        this.loaded = true
        return html`<a href="${this.href}" target="${this.target}">
            <slot class="content"></slot>
        </a>`;
    }
}