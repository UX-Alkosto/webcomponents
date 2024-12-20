/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as i,s as n,x as r}from"./webcomponents-2.2.1-D1zuXL5S.js";let s;const o=t(s||(s=(t=>t)`:host {
    align-items: center;
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${0});
}
a {
    color: var(--primary-color2, #004691);
    text-decoration: underline;
}`),e(i.fontSize.base));let a,c,l=t=>t;class h extends n{static get properties(){return{href:{type:String},icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},modal:{type:String,reflect:!0},title:{type:String},target:{type:String}}}static get styles(){return o}constructor(){super(),this.href="#",this.icon="alk-icon-derecha",this.loaded=!1,this.modal="",this.target="_self",this.title="",this.breakPoint=768}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){this.loaded=!0;const t=this.hasAttribute("icon")?r(a||(a=l`<k-icon icon="${0}"></k-icon>`),this.icon):"";return r(c||(c=l`<a href="${0}" @click="${0}" target="${0}" title="${0}">
            <slot class="content"></slot>
            ${0}
        </a>`),this.href,this._handleModal,this.target,this.title,t)}_handleModal(t){if(""!==this.modal){t.preventDefault();const e=document.querySelectorAll(`k-modal[name="${this.modal}"]`);if(e.length)return window.innerWidth<this.breakPoint?e[e.length-1].dispatchEvent(new Event("open")):e[0].dispatchEvent(new Event("open"))}}}export{h as Link};
