/*! webcomponents release: 2.2.1 */
import{i as t,s as e,c as n,x as r}from"./webcomponents-2.2.1-D1zuXL5S.js";let i;const s=t(i||(i=(t=>t)` :host {
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;
    justify-content: center;
    margin: 0 auto 2rem;
    padding: 0 1rem;
}
.content {
    display: grid;
    grid-gap: 1rem;
    width: 100%;
}
@media screen and (min-width: 768px) {
    :host {
        padding: 0;
    }
}`));let a,c,l=t=>t;class m extends e{static get properties(){return{"desktop-columns":{type:Number,reflect:!0},"mobile-columns":{type:Number,reflect:!0},width:{type:Number,reflect:!0}}}static get styles(){return s}constructor(){super(),this["desktop-columns"]=6,this["mobile-columns"]=2,this.width=n.defaultMaxWidth}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(`${t}-changed`))}render(){return r(a||(a=l`${0}${0}`),this._dynamicStyles(),n.defaultSlot)}_dynamicStyles(){const t=this["desktop-columns"],e=this["mobile-columns"],i=`${0===this.width||null===this.width?n.defaultMaxWidth:this.width}px`;return r(c||(c=l`<style>
            :host {
                max-width: ${0};
            }
            @media screen and (min-width: 360px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${0}) - 16px),1fr));
                }
            }
            @media screen and (min-width: 768px) {
                .content {
                    grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${0}) - 16px),1fr))
                }
            }
        </style>`),i,e,t)}}export{m as Grid};
