import { LitElement, html } from 'lit';
import { styles } from './css';

export class Icon extends LitElement {
	static get properties() {
		return {
			icon: { type: String, reflect: true },
			loaded: { type: Boolean, reflect: true }
		};
	}
	static get styles() {
		return styles;
	}
	constructor() {
		super();
		this.loaded = false;
		this.target = '';
	}
	attributeChangedCallback(name, oldval, newval) {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
	render() {
		this.loaded = true;
		return html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css">
            <span class="${this.icon}"></span>`;
	}
}