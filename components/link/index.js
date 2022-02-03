import { LitElement, html } from 'lit';
import { styles } from './css';

export class Link extends LitElement {
    static get properties() {
        return {
            href: { type: String },
            icon: { type: String, reflect: true },
            loaded: { type: Boolean, reflect: true },
            modal: { type: String, reflect: true },
            title: { type: String },
            target: { type: String }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.href = '#';
        this.icon = 'alk-icon-derecha';
        this.loaded = false;
        this.modal = '';
        this.target = '_self';
        this.title = '';
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        const icon = (this.hasAttribute('icon')) ?
            html`<k-icon icon="${this.icon}"></k-icon>` :
            '';
        return html`<a href="${this.href}" @click="${this._handleModal}" target="${this.target}" title="${this.title}">
            <slot class="content"></slot>
            ${icon}
        </a>`;
    }
    _handleModal(event) {
        if (this.modal !== '') {
            event.preventDefault();
            const modal = document.querySelectorAll(`k-modal[name="${this.modal}"]`);
            return modal.length && modal[modal.length - 1].dispatchEvent(new Event('open'));
        }
    }
}