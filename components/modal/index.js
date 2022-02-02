import { LitElement, html } from 'lit';
import { styles } from './css';

// TODO:
// - add open and close methods

export class Modal extends LitElement {
    static get properties() {
        return {
            name: { type: String, reflect: true },
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.open = false;
        this.name = '';
        this.addEventListener('open', this._handleOpen);
    }
    get isOpen() {
        return this.open;
    }
    render() {
        return html`<div class="modal" aria-hidden="true" id="${this.name}">
            <div class="modal-header">
                <slot name="header"></slot>
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
        this.style.setProperty('display', 'block');
    }
}