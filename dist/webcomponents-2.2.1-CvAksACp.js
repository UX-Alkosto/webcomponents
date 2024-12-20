/*! webcomponents release: 2.2.1 */
import{Banner as t}from"./webcomponents-2.2.1-BCH1T_ta.js";import{i as e,x as i}from"./webcomponents-2.2.1-D1zuXL5S.js";let r;const s=e(r||(r=(t=>t)`
.full .lazy-iframe,
.left .lazy-iframe,
.left-cut .lazy-iframe,
.right .lazy-iframe,
.right-cut .lazy-iframe {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}

.full iframe,
.left iframe,
.left-cut iframe,
.right iframe,
.right-cut iframe {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .left-cut iframe {
        clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    }
    .right-cut iframe {
        clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
    }
}`));let h,c,a,l=t=>t;class n extends t{static get styles(){return[super.styles,s]}constructor(){super()}render(){return this.loaded=!0,i(h||(h=l`${0}<div class="container">
                ${0}
                <slot class="content"></slot>
                ${0}
            </div>`),this._dynamicStyles(),"left"==this.type||"left-cut"==this.type||"full"==this.type?this._getIframe({height:this.height,src:this.src,type:this.type}):"","right"==this.type||"right-cut"==this.type?this._getIframe({height:this.height,src:this.src,type:this.type}):"")}_getIframe({height:t,src:e,type:r}){if(e.length)return i(c||(c=l`<section class="${0}">${0}</section>`),r,this.lazyIframe({height:t,src:e}))}lazyIframe({height:t,src:e}){if("IntersectionObserver"in window){const r=new IntersectionObserver((i=>{i.forEach((({isIntersecting:i,target:s})=>{if(i){const i=document.createElement("iframe");i.allowFullscreen=!0,i.height=t,i.src=e,i.loading="lazy",i.frameBorder="0",this.shadowRoot.querySelector(".lazy-iframe").appendChild(i),r.unobserve(s)}}))}));return r.observe(this),i(a||(a=l`<div class="lazy-iframe"></div>`))}}}export{n as BannerVideo};
