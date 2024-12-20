/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as i,s as r,x as o}from"./webcomponents-2.2.1-D1zuXL5S.js";let s;const n=t(s||(s=(t=>t)`:host {
    background-color: var(--k-banner-background-color, #FFF);
    color: var(--text-color1, #444444);
    display: flex;
    flex-wrap: wrap;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${0});
    justify-content: center;
    margin-bottom: 2rem;
    overflow: hidden;
}
:host([type=full]) .container {
    flex-wrap: wrap;
}
:host([type=full]) .content {
    text-align: center;
    align-items: stretch;
}
:host([type=left]),
:host([type=right]) {
    background-color: var(--k-banner-background-color, #F5F5F5);
}
:host([type=left-cut]) .container,
:host([type=right-cut]) .container {
    background-color: var(--k-banner-background-color, #F5F5F5);
}
:host([type=left]) .content,
:host([type=right]) .content {
    align-items: flex-start;
}
::slotted(h1),
::slotted(h2),
::slotted(h3) {
    color: var(--primary-color2, #004691) !important;
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
::slotted(p) {
    color: var(--text-color1, #444444);
    font-size: var(--font-base, ${0});
    line-height: 1.572em;
}
::slotted(k-button) {
    width:100%;
}
.container {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    max-width: ${0};
}
section,
.content {
    align-items: center;
    display: flex;
}
.content {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    order: 2;
}
section picture {
    display: flex;
    overflow: hidden;
    width: 100%;
}
.full{
    flex-basis: 100%;
}
.left,
.left-cut,
.right,
.right-cut {
    flex-basis: 100%;
}
.full img,
.left img,
.left-cut img,
.right img,
.right-cut img {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}
@media screen and (min-width: 420px) {
    ::slotted(k-button) {
        width:auto;
    }
}
@media screen and (min-width: 768px) {
    :host([type=full]) .content{
        align-items: center;
        flex-basis: 100%;
    }
    .container {
        flex-direction: row;
        justify-content: space-between;
    }
    .content {
        align-items: flex-start;
        order: unset;
        padding: 0 2rem;
    }
    .left,
    .right{
        flex-basis: 50%;
    }
    .left-cut,
    .right-cut {
        align-items: stretch;
        flex-basis: 40%;
    }
    .left-cut {
        margin-left: 0;
        filter: drop-shadow(10px 0 0 var(--primary-color2, #004691));
    }
    .left-cut img {
        clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    }
    .right-cut {
        margin-right: 0;
        filter: drop-shadow(-10px 0 0 var(--primary-color2, #004691));
    }
    .right-cut img {
        clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
    }
}`),e(i.fontSize.base),e(i.fontSize.h1),e(i.fontSize.h2),e(i.fontSize.h3),e(i.fontSize.h4),e(i.fontSize.h5),e(i.fontSize.p),e(`${i.defaultMaxWidth}px`));let l,c,a,h,d=t=>t;class f extends r{static get properties(){return{loaded:{type:Boolean,reflect:!0},height:{type:Number},src:{type:String},"mobile-src":{type:String},type:{type:String},width:{type:Number}}}static get styles(){return n}constructor(){super(),this.height=0,this.width=null,this.loaded=!1,this.src="",this["mobile-src"]="",this.type="left"}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){this.loaded=!0;const t=this._getImage(this.type);return o(l||(l=d`${0}<div class="container">
                ${0}
                <slot class="content"></slot>
                ${0}
            </div>`),this._dynamicStyles(),"left"==this.type||"left-cut"==this.type||"full"==this.type?t:"","right"==this.type||"right-cut"==this.type?t:"")}_dynamicStyles(){const t=""+(null===this.width?"flex-basis: 50% !important;":`flex-basis: ${this.width}% !important;`);return o(c||(c=d`<style>
            @media screen and (min-width: 768px) {
                .left,
                .right {${0}}
            }
        </style>`),t)}_getImage(t){if(this.src.length)return o(a||(a=d`<section class="${0}">
        <picture>
            ${0}
            <source media="(min-width: 769px)" srcset="${0}">
            <img height="${0}" src="${0}" loading="lazy" />
        </picture>
        </section>`),t,this["mobile-src"].length?o(h||(h=d`<source media="(max-width: 768px)" srcset="${0}">`),this["mobile-src"]):"",this.src,this.height,this.src)}}export{f as Banner};
