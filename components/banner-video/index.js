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
		return html`<section class="${type}">${this.lazyIframe({height, src})}</section>`;
	}
	lazyIframe({height, src}) {
		// check if the browser supports IntersectionObserver
		if ('IntersectionObserver' in window) {
			// create a new IntersectionObserver
			const observer = new IntersectionObserver(entries => {
				// loop through the entries
				entries.forEach(({ isIntersecting, target }) => {
					// if the element is visible
					if (isIntersecting) {
						// add the iframe
						const iframe = document.createElement('iframe');
						iframe.allowFullscreen = true;
						iframe.height = height;
						iframe.src = src;
						iframe.loading = 'lazy';
						iframe.frameBorder = '0';
						this.shadowRoot.querySelector('.lazy-iframe').appendChild(iframe);
						// stop watching this element
						observer.unobserve(target);
					}
				});
			});
			// start watching the element
			observer.observe(this);
			// return a placeholder
			return html`<div class="lazy-iframe"></div>`;
		}
	}
}