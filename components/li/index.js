import { LitElement, html } from 'lit';
import { styles } from './css';
export class ItemList extends LitElement {
    constructor (){
        super();
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`<li>
            <slot></slot>
        </li>`;  
    }
}