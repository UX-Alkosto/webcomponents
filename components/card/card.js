import { LitElement, css, html } from 'lit-element';

export class Card extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            type: { type: String }
        };
    }
    static get styles() {
        return css`
            :host{
                box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
                display: inline-block;
                margin: .5em;
                max-width: 100%;
                padding: 1rem;
                transition: ease-in-out .3s all;
                width: auto;
            }
            :host(:hover),
            :host(:focus){
                box-shadow: 0 2px 5px 2px rgba(0,0,0,.2);
            }
            :host([type=product-item]) {
                margin-top: 2rem;
                text-align: center;
            }
            :host([type=product-item]) ::slotted(img) {
                margin-top: -3rem;
                max-width: 100%;
                width: auto;
            }
            :host([type=product-item]) ::slotted(p) {
                text-align: initial;
            }
            ::slotted(h1),
            ::slotted(h2),
            ::slotted(h3),
            ::slotted(strong) {
                color: var(--primary-color2);
            }
            ::slotted(p) {
                color: var(--text-color1);
                display: none;
                font-size: var(--font-base);
                line-height: 1.572em;
            }
            @media screen and (min-width: 768px) {
                ::slotted(p) {
                    display: block;
                }
            }
        `;
    }
    constructor() {
        super();
        this.type = 'default';
        this.loaded = false;
    }
    render() {
        this.loaded = true;
        return html `<slot class="content"></slot>`;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
}