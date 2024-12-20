/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as o,s}from"./webcomponents-2.2.1-D1zuXL5S.js";let r;const i=t(r||(r=(t=>t)`:host{
    border-bottom: 1px solid var(--k-title-underline-border-color, #E0E0E0);
    display: flex;
    font-family: var(--font-family, 'Arial');
    margin: 0 0 1rem;
    max-width: 100%;
    padding: 0;
    transition: ease-in-out .3s all;
    width: auto;
}

:host([type=center]) {
    justify-content: center;
}
:host([type=left]) {
    justify-content: flex-start;
}
:host([type=right]) {
    justify-content: flex-end;
}
::slotted(h1),
::slotted(h2),
::slotted(h3),
::slotted(h4),
::slotted(h5),
::slotted(h6) {
    box-shadow: inset 0 -1px 0 0px var(--primary-color1, #E63027), 0px 2px 0 0px var(--primary-color1, #E63027);
    color: var(--primary-color2, #004691) !important;
    display: inline-block;
    margin: 0 !important;
    padding: .5em 0;
    position: relative;
}
::slotted(h1) {
    font-size: ${0};
}
::slotted(h2) {
    font-size: ${0};
}
::slotted(h3) {
    font-size: ${0};
}
::slotted(h4) {
    font-size: ${0};
}
::slotted(h5) {
    font-size: ${0};
}
::slotted(h6) {
    font-size: ${0};
}
::slotted(p) {
    font-size: ${0};
}`),e(o.fontSize.h1),e(o.fontSize.h2),e(o.fontSize.h3),e(o.fontSize.h4),e(o.fontSize.h5),e(o.fontSize.h6),e(o.fontSize.p));class n extends s{static get properties(){return{loaded:{type:Boolean,reflect:!0},type:{type:String}}}static get styles(){return i}constructor(){super(),this.loaded=!1,this.type="left",this.shadow=!0}render(){return this.loaded=!0,o.defaultSlot}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}}export{n as TitleUnderline};
