/*! webcomponents release: 2.0.3 */
import{r as o,o as t,c as e,s as a,$ as r}from"./index-86417503.js";let s;const i=o(s||(s=(o=>o)`:host{display:none}:host([closed]),:host([open]){display:block}::slotted(h1),::slotted(h2),::slotted(h3){color:var(--primary-color2,#004691)!important}::slotted(h1){font-size:${0}}::slotted(h2){font-size:${0}}::slotted(h3){font-size:${0}}::slotted(h4){font-size:${0}}::slotted(h5){font-size:${0}}:host([open]) .modal{animation:.3s forwards slideUp}:host([closed]) .modal{animation:.3s forwards slideDown}@keyframes slideDown{0%{transform:translateY(0)}100%{transform:translateY(100%)}}@keyframes slideUp{0%{transform:translateY(100%)}100%{transform:translateY(0)}}.overlay{animation-play-state:paused;background-color:var(--k-modal-shadow-background-color,rgba(0,0,0,.7));bottom:0;left:0;position:fixed;right:0;top:0;transition:ease-in-out .3s all;z-index:9999}.modal{animation-play-state:paused;background-color:var(--k-modal-background-color,#fff);bottom:0;box-shadow:0 0 6px rgba(0,0,0,.4);left:0;max-height:90vh;max-width:775px;overflow:hidden;position:fixed;width:100%;z-index:10000}.modal-body{box-sizing:border-box;overflow-x:hidden;overflow-y:auto;padding:24px}.modal-body::-webkit-scrollbar-track{border-radius:10px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar{width:5px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar-thumb{border-radius:10px;background-color:#444;transition:.3s}.modal-header{--k-icon-color:var(--primary-color2, #004691);align-items:center;background-color:var(--k-modal-header-background-color,#fff);border-bottom:2px solid var(--primary-color1,#e63027);box-sizing:border-box;display:flex;height:52px;padding:0 16px 0 24px}.modal-header h4{color:var(--text-color1,#444);font-size:${0};font-weight:400;margin:0}.modal-header k-icon{cursor:pointer;font-size:30px;font-weight:600;height:30px;margin-left:auto}@media screen and (min-width:768px){.modal{bottom:initial;height:434px;left:50%;top:50%;transform:translate(-50%,-50%)}.modal-body{height:382px;max-height:calc(90vh - 52px)}@keyframes slideDown{0%{transform:translate(-50%,-50%)}100%{transform:translate(-50%,100%)}}@keyframes slideUp{0%{transform:translate(-50%,100%)}100%{transform:translate(-50%,-50%)}}}`),t(e.fontSize.h1),t(e.fontSize.h2),t(e.fontSize.h3),t(e.fontSize.h4),t(e.fontSize.h5),t(e.fontSize.h2));let l,d=o=>o;class n extends a{static get properties(){return{name:{type:String,reflect:!0},open:{type:Boolean,reflect:!0,attribute:"open"},closed:{type:Boolean,reflect:!0,attribute:"closed"}}}static get styles(){return i}constructor(){super(),this.closed=!1,this.open=!1,this.name="",this.addEventListener("open",this._handleOpen)}get isOpen(){return this.open}render(){return r(l||(l=d`<div class="overlay" @click="${0}"></div><div class="modal" aria-hidden="${0}" id="${0}"><div class="modal-header"><h4><slot name="header"></slot></h4><k-icon icon="alk-icon-close" name="close" @click="${0}"></k-icon></div><div class="modal-body"><slot name="body"></slot></div><div class="modal-footer"><slot name="footer"></slot></div></div>`),this._handleClose,!this.open,this.name,this._handleClose)}_handleOpen(){this.open=!0,document.querySelector("body").style.setProperty("overflow","hidden")}_handleClose(){this.closed=!0,this.open=!1,document.querySelector("body").style.removeProperty("overflow"),setTimeout((()=>{this.removeAttribute("closed")}),300)}}export{n as Modal};
