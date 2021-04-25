import { LitElement, css, html } from 'lit-element';

export class Grid extends LitElement {
    static get properties() {
        return {
            'desktop-columns': { type: Number, reflect: true },
            'mobile-columns': { type: Number, reflect: true },
            width: { type: Number, reflect: true }
        };
    }
    static get styles() {
        return css`
            :host {
                display: flex;
                flex: 1;
                flex-wrap: no-wrap;
                justify-content: center;
                margin: 0 auto 2rem;
                padding: 0;
            }
            .content {
                display: grid;
                grid-gap: 1rem;
                width: 100%;
            }
        `;
    }
    constructor() {
        super();
        this['desktop-columns'] = 6;
        this['mobile-columns'] = 2;
        this.width = 1204;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        return html`${this._dynamicStyles()}<slot class="content"></slot>`;
    }
    _dynamicStyles() {
        const desktopColumns = this['desktop-columns'];
        const mobileColumns = this['mobile-columns'];
        const width = `${(this.width === 0 || this.width === null) ? 1204 : this.width}px`;
        return html`<style>
            :host {
                max-width: ${width};
            }
            @media screen and (min-width: 360px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${mobileColumns}) - 16px),1fr));
                }
            }
            @media screen and (min-width: 768px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${desktopColumns}) - 16px),1fr))
                }
            }
        </style>`;
    }
}