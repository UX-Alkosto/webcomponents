import { LitElement, html } from 'lit';
import { styles } from './css';

// TODO:
// - add open and close methods

export class Modal extends LitElement {
    static get properties() {
        return {};
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.open = false;
    }
    firstUpdated() {
    }
    get isOpen() {
        return this.open;
    }
    render() {
        return html`<div class="modal" aria-hidden="true">
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
}