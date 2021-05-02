import { LitElement, html } from 'lit';
import { common } from '../common';
import { styles } from './css';

export class Grid extends LitElement {
    static get properties() {
        return {
            'desktop-columns': { type: Number, reflect: true },
            'mobile-columns': { type: Number, reflect: true },
            width: { type: Number, reflect: true }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this['desktop-columns'] = 6;
        this['mobile-columns'] = 2;
        this.width = common.defaultMaxWidth;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        return html`${this._dynamicStyles()}${common.defaultSlot}`;
    }
    _dynamicStyles() {
        const desktopColumns = this['desktop-columns'];
        const mobileColumns = this['mobile-columns'];
        const width = `${(this.width === 0 || this.width === null) ? common.defaultMaxWidth : this.width}px`;
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