/*! webcomponents release: 2.0.1 */
import{Banner as t}from"./index-70dd4c83.js";import{r as e,$ as i}from"./index-a118d2ae.js";let r;const s=e(r||(r=(t=>t)`.full iframe,.left iframe,.left-cut iframe,.right iframe,.right-cut iframe{max-width:100%;object-fit:cover;width:100%}@media screen and (min-width:768px){.left-cut iframe{clip-path:polygon(0 0,0 100%,90% 100%,100% 0)}.right-cut iframe{clip-path:polygon(0 0,10% 100%,100% 100%,100% 0)}}`));let h,c,l=t=>t;class a extends t{static get styles(){return[super.styles,s]}constructor(){super()}render(){return this.loaded=!0,i(h||(h=l`${0}<div class="container">${0}<slot class="content"></slot>${0}</div>`),this._dynamicStyles(),"left"==this.type||"left-cut"==this.type||"full"==this.type?this._getIframe({height:this.height,src:this.src,type:this.type}):"","right"==this.type||"right-cut"==this.type?this._getIframe({height:this.height,src:this.src,type:this.type}):"")}_getIframe({height:t,src:e,type:r}){if(e.length)return i(c||(c=l`<section class="${0}"><iframe allowfullscreen frameborder="0" height="${0}" src="${0}" loading="lazy"></iframe></section>`),r,t,e)}}export{a as BannerVideo};