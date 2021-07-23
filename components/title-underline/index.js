import { LitElement } from 'lit';
import { common } from '../common';
import { styles } from './css';

export class TitleUnderline extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            type: { type: String }
        };
    }
    static get styles() {
        return styles;
    }
    constructor() {
        super();
        this.loaded = false;
        this.type = 'left';
        this.shadow = true;
    }
    render() {
        this.loaded = true;
        return common.defaultSlot;
    }
    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        this.dispatchEvent(new Event(`${name}-changed`));
    }
}