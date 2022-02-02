/*! webcomponents release: 2.0.1 */
import{r as o,o as t,c as r,s as e,$ as d}from"./index-a118d2ae.js";let a;const i=o(a||(a=(o=>o)`:host{background-color:var(--k-modal-shadow-background-color,rgba(0,0,0,.7));bottom:0;display:none;left:0;position:fixed;right:0;top:0;transition:ease-in-out .3s all;z-index:9999}::slotted(h1),::slotted(h2),::slotted(h3){color:var(--primary-color2,#004691)!important}::slotted(h1){font-size:${0}}::slotted(h2){font-size:${0}}::slotted(h3){font-size:${0}}::slotted(h4){font-size:${0}}::slotted(h5){font-size:${0}}.modal{background-color:var(--k-modal-background-color,#fff);box-shadow:0 0 6px rgba(0,0,0,.4);left:50%;max-width:775px;overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:100%}.modal-body{box-sizing:border-box;overflow-x:hidden;overflow-y:auto;padding:24px}.modal-body::-webkit-scrollbar-track{border-radius:10px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar{width:5px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar-thumb{border-radius:10px;background-color:#444;transition:.3s}.modal-header{align-items:center;background-color:var(--k-modal-header-background-color,#fff);border-bottom:2px solid var(--k-modal-header-border-color,#e63027);box-sizing:border-box;color:var(--k-modal-header-color,#444);display:flex;font-size:${0};height:52px;padding:0 24px}@media screen and (min-width:768px){.modal{height:434px;max-height:90vh}.modal-body{height:382px;max-height:calc(90vh - 52px)}}`),t(r.fontSize.h1),t(r.fontSize.h2),t(r.fontSize.h3),t(r.fontSize.h4),t(r.fontSize.h5),t(r.fontSize.h2));let l,s=o=>o;class n extends e{static get properties(){return{name:{type:String,reflect:!0}}}static get styles(){return i}constructor(){super(),this.open=!1,this.name="",this.addEventListener("open",this._handleOpen)}get isOpen(){return this.open}render(){return d(l||(l=s`<div class="modal" aria-hidden="true" id="${0}"><div class="modal-header"><slot name="header"></slot></div><div class="modal-body"><slot name="body"></slot></div><div class="modal-footer"><slot name="footer"></slot></div></div>`),this.name)}_handleOpen(){this.open=!0,this.style.setProperty("display","block")}}export{n as Modal};