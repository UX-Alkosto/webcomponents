import { LitElement, css, html } from 'lit-element';

export class GridContainer extends LitElement {
    static get properties() {
        return {
            'desktop-items': { type: Number, reflect: true },
            'mobile-items': { type: Number, reflect: true },
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
                margin: 0 auto;
                padding: 0 1rem;
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
        this['desktop-items'] = 6;
        this['mobile-items'] = 2;
        this.width = 1204;
    }
    render() {
        return html`${this._dynamicStyles()}<slot class="content"></slot>`;
    }
    _dynamicStyles() {
        const desktopItems = this['desktop-items'];
        const mobileItems = this['mobile-items'];
        const width = `${(this.width === 0 || this.width === null) ? 1204 : this.width}px`;
        return html`<style>
            :host {
                max-width: ${width};
            }
            @media screen and (min-width: 360px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${mobileItems}) - 16px),1fr));
                }
            }
            @media screen and (min-width: 768px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${desktopItems}) - 16px),1fr))
                }
            }
        </style>`;
    }
}