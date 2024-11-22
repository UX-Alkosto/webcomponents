/*! webcomponents release: 2.2.1 */
import{i as t,r,c as o,s as e}from"./webcomponents-2.2.1-D1zuXL5S.js";let n;const i=t(n||(n=(t=>t)`:host {
    align-items: center;
    background-color: var(--button-primary-background-color, #E63027);
    border: var(--button-primary-border, 1px solid #E63027);
    border-radius: var(--button-radius, 4px);
    box-sizing: border-box;
    color: var(--button-primary-text-color, #ffffff);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${0});
    font-weight: normal;
    justify-content: center;
    line-height: 1.125rem;
    min-height: 56px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: ease-in-out .3s all;
    width: auto;
}
:host([variant=outline]) {
    background-color: var(--button-outline-background-color, transparent);
    border: var(--button-outline-border,1px solid #E63027);
    color: var(--button-outline-text-color, #E63027);
}
:host(:focus),
:host(:hover),
:host([variant=outline]:focus),
:host([variant=outline]:hover) {
    background-color: var(--button-primary-background-color-hover, #AB1114);
    border-color: var(--button-primary-background-color-hover, #AB1114);
}
:host([variant=outline]:focus),
:host([variant=outline]:hover) {
    color: var(--button-primary-text-color-hover, #ffffff);
}`),r(o.fontSize.base));class a extends e{static get properties(){return{disabled:{type:Boolean},href:{type:String},loaded:{type:Boolean,reflect:!0},icon:{type:String},target:{type:String},variant:{type:String}}}static get styles(){return i}constructor(){super(),this.disabled=!1,this.href="",this.loaded=!1,this.icon="",this.target="_self",this.variant="primary",this.addEventListener("click",this._handleClick)}attributeChangedCallback(t,r,o){super.attributeChangedCallback(t,r,o),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,o.defaultSlot}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}export{a as Button};
