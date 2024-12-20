/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as n,s as o,x as l}from"./webcomponents-2.2.1-D1zuXL5S.js";let s;const r=t(s||(s=(t=>t)`
ul {
    color: var(--text-color1, #444);
    -webkit-column-count: 1;
    column-count: 1;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${0});
    line-height: 1.572em;
    list-style: none;
    padding: 0;
}
@media only screen and (min-width: 768px) {
    ul {
        -webkit-column-count: var(--k-column-list, 1);
        column-count: var(--k-column-list, 1);
    }
}`),e(n.fontSize.p));let c,i=t=>t;class u extends o{constructor(){super(),this.colum=1}static get properties(){return{column:{type:Number}}}static get styles(){return r}render(){return l(c||(c=i`<ul style="--k-column-list:${0};">
        <slot></slot>
    </ul>`),this.column)}}export{u as List};
