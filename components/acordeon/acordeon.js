import { LitElement, html } from "lit";
import { styles } from "./css";
export class Acordeon extends LitElement {
    constructor(){
        super()
        this.open=false
        this.title="Escriba un título"
    }
    static get properties() {
        return {
            open: {type:String,reflect:true},
            title: {type:String}
        }
    }
    static get styles(){
        return styles
    }
    firstUpdated() {
        this.open = isTrueSet(this.getAttribute('open'));
    }
    render(){
        return html`<details ?open="${this.open}">
        <summary>
            <h3 class="tit_pregunta">${this.title}</h3>
            <svg class="control-icon control-icon-expand" width="40" height="40" role="presentation">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" />
            </svg>
            <svg class="control-icon control-icon-close" width="40" height="40" role="presentation">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
            </svg>
        </summary>
        <slot></slot>
    </details>`
    }
}
function isTrueSet(value = '') {
    if(typeof value !== 'string') return false;
    return value.toLowerCase() === 'true' && true;
}