/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as o,s as i,x as r}from"./webcomponents-2.2.1-D1zuXL5S.js";let s;const a=t(s||(s=(t=>t)`:host{
    background-color: var(--k-card-background-color, #fff);
    border-radius: var(--k-card-border-radius, 4px);
    display: inline-flex;
    flex-direction: column;
    margin: .5em;
    max-width: 100%;
    padding: 0;
    position:relative;
    transition: ease-in-out .3s all;
    width: auto;
}
:host([href]) {
    cursor: pointer;
}
:host([shadow]) {
    box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
}
:host([shadow]:hover),
:host([shadow]:focus){
    box-shadow: 0 2px 5px 2px rgba(0,0,0,.2);
}
::slotted(k-button){
    border: 4px solid white;
    min-width: 180px;
    position: absolute;
    right: 2em;
    top: 164px;
    z-index: 1;
}
::slotted(img){
    border-radius: var(--button-radius,4px) var(--button-radius,4px) 0 0;
    height: 191px;
    object-fit:cover;
    width:100%;
}
.text{
    padding: .5em 1.75em 1.75em 1.75em;
}

::slotted(span){
    color: var(--primary-color1,#F9C332);
    font-size: var(--font-base, ${0});
    font-weight: bold;
    line-height: 1.572em;
}
::slotted(h2){
    color: var(--text-color1,#010000);
    font-size: ${0};
    font-weight: bold;
    line-height: 1.3em;
    max-width: 380px;
}

::slotted(p){
    color: var(--text-color1, #444444);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: var(--font-base, ${0});
    line-height: 1.572em;
}
::slotted(.author_date){
    color: var(--text-color3, #959595);
    font-size: 0.857em;
    font-weight: medium;
    line-height: 1.572em;
    margin-bottom: 0;
    text-align: right;
}

@media screen and (min-width: 768px) {
    ::slotted(p) {
        display: block;
    }
}`),e(o.fontSize.p),e(o.fontSize.h2),e(o.fontSize.p));let n,l=t=>t;class d extends i{static get properties(){return{href:{type:String},loaded:{type:Boolean,reflect:!0},type:{type:String},target:{type:String},shadow:{type:Boolean,reflect:!0}}}static get styles(){return a}constructor(){super(),this.href="",this.loaded=!1,this.target="_self",this.type="default",this.shadow=!0,this.addEventListener("click",this._handleClick)}render(){return this.loaded=!0,r(n||(n=l`<slot name="image"></slot><div class="text"><slot name="text"></slot></div>`))}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}export{d as BlogArticle};
