import { LitElement, html } from 'lit';
import { styles } from './css';
export class Banner extends LitElement {
	static get properties() {
		return {
			loaded: { type: Boolean, reflect: true },
			height: { type: Number },
			src: { type: String },
			'mobile-src': { type: String },
			type: { type: String },
			width: { type: Number }
		};
	}
	static get styles() {
		return styles;
	}
	constructor() {
		super();
		this.height = 0;
		this.width = null;
		this.loaded = false;
		this.src = '';
		this['mobile-src'] = '';
		this.type = 'left';
	}
	attributeChangedCallback(name, oldval, newval) {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
	render() {
		this.loaded = true;
		const image = this._getImage(this.type);
		return html`${this._dynamicStyles()}<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? image : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? image : ''}
            </div>`;
	}
	_dynamicStyles() {
		const width = `${(this.width === null) ? 'flex-basis: 50% !important;' : `flex-basis: ${this.width}% !important;`}`;
		return html`<style>
            @media screen and (min-width: 768px) {
                .left,
                .right {${width}}
            }
        </style>`;
	}
	_getImage(type) {
		if (!this.src.length) return;
		return html`<section class="${type}">
        <picture>
            ${(this['mobile-src'].length) ? html`<source media="(max-width: 768px)" srcset="${this['mobile-src']}">` : ''}
            <source media="(min-width: 769px)" srcset="${this.src}">
            <img height="${this.height}" src="${this.src}" loading="lazy" />
        </picture>
        </section>`;
	}
}