import { LitElement, html } from 'lit';
import { styles } from './css';
export class Acordeon extends LitElement {
	constructor() {
		super();
		this.open = false;
		this.title = 'Escriba un título';
	}
	static get properties() {
		return {
			open: { type: String, reflect: true },
			title: { type: String }
		};
	}
	static get styles() {
		return styles;
	}
	firstUpdated() {
		this.open = isTrueSet(this.getAttribute('open'));
	}
	render() {
		return html`<details ?open="${this.open}">
        <summary>
            <h3>${this.title}</h3>
            <k-icon class="expand" icon="alk-icon-abajo"></k-icon>
            <k-icon class="collapse" icon="alk-icon-cerrar1"></k-icon>
        </summary>
        <hr>
        <slot></slot>
    </details>`;
	}
}
function isTrueSet(value = '') {
	if (typeof value !== 'string') return false;
	return value.toLowerCase() === 'true' && true;
}