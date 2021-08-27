import { LitElement, html } from 'lit';
import { styles } from './css';
export class Lista extends LitElement {
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
        return html`<ul class="split-list" style="--k-column-list:${this.column};">
        <slot></slot>
    </ul>`;  
    }
}