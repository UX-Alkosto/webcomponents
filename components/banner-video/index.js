import { html } from 'lit';
import { Banner } from '../banner';
import { styles } from './css';
export class BannerVideo extends Banner {
    static get styles() {
        return [super.styles, styles];
    }
    constructor() {
        super();
    }
    render() {
        this.loaded = true;
        return html`${this._dynamicStyles()}<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? this._getIframe({ height: this.height, src: this.src, type: this.type }) : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? this._getIframe({ height: this.height, src: this.src, type: this.type }) : ''}
            </div>`;
    }
    _getIframe({height, src, type}) {
        if (!src.length) return;
        return html`<section class="${type}">
            <iframe allowfullscreen frameborder="0" height="${height}" src="${src}" loading="lazy"> </iframe>
        </section>`;
    }
}