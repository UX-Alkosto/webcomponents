import { LitElement } from 'lit';
import { common } from '../common';
import { styles } from './css';

export class Button extends LitElement {
    static get properties() {
        return {
            disabled: { type: Boolean },
            href: { type: String },
            loaded: { type: Boolean, reflect: true },
            icon: { type: String },
            target: { type: String },
            variant: { type: String }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.disabled = false;
        this.href = '';
        this.loaded = false;
        this.icon = '';
        this.target = '_self';
        this.variant = 'primary';
        this.addEventListener('click', this._handleClick);
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
    render() {
        this.loaded = true;
        return common.defaultSlot;
    }
    _handleClick() {
        if (this.href === '') return;
        return window.open(this.href, this.target);
    }
}