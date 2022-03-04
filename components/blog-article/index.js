import { html,LitElement } from 'lit';
import { styles } from './css';

export class BlogArticle extends LitElement {
	static get properties() {
		return {
			href: { type: String },
			loaded: { type: Boolean, reflect: true },
			type: { type: String },
			target: { type: String },
			shadow: { type: Boolean, reflect: true }
		};
	}
	static get styles() {
		return styles;
	}
	constructor() {
		super();
		this.href = '';
		this.loaded = false;
		this.target = '_self';
		this.type = 'default';
		this.shadow = true;
		this.addEventListener('click', this._handleClick);
	}
	render() {
		this.loaded = true;
		return html`<slot name="image"></slot><div class="text"><slot name="text"></slot></div>`;
	}
	attributeChangedCallback(name, oldval, newval) {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
	_handleClick() {
		if (this.href === '') return;
		return window.open(this.href, this.target);
	}
}