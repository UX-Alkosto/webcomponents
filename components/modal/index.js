import { LitElement, html } from 'lit';
import { styles } from './css';

export class Modal extends LitElement {
	static get properties() {
		return {
			name: { type: String, reflect: true },
			open: { type: Boolean, reflect: true, attribute: 'open' },
			closed: { type: Boolean, reflect: true, attribute: 'closed' },
		};
	}
	static get styles() {
		return styles;
	}
	constructor() {
		super();
		this.closed = false;
		this.open = false;
		this.name = '';
		this.addEventListener('open', this._handleOpen);
	}
	get isOpen() {
		return this.open;
	}
	render() {
		return html`<div class="overlay" @click="${this._handleClose}"></div>
        <div class="modal" aria-hidden="${!this.open}" id="${this.name}">
            <div class="modal-header">
                <h4><slot name="header"></slot></h4>
                <k-icon icon="alk-icon-close" name="close" @click="${this._handleClose}"></k-icon>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>`;
	}
	_handleOpen() {
		this.open = true;
		document.querySelector('body').style.setProperty('overflow', 'hidden');
	}
	_handleClose() {
		this.closed = true;
		this.open = false;
		document.querySelector('body').style.removeProperty('overflow');
		setTimeout(() => {
			this.removeAttribute('closed');
		}, 300);
	}
}