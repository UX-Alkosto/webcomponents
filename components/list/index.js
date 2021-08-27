import { LitElement, html } from 'lit';
import { styles } from './css';
export class List extends LitElement {
    constructor (){
        super();
        this.colum=1;
    }
    static get properties(){
        return {
            column: {type:Number}
        };
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`<ul style="--k-column-list:${this.column};">
        <slot></slot>
    </ul>`;  
    }
}