/*! webcomponents release: 2.2.1 */
import{i as t,r as e,c as i,s as o,x as n}from"./webcomponents-2.2.1-D1zuXL5S.js";let r;const a=t(r||(r=(t=>t)`
::slotted(ul) {
    color: var(--text-color1, #444444);
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
    padding: 0px;
}

::slotted(p) {
    color: var(--text-color1, #444444);
    font-size: var(--font-base, ${0});
    line-height: 1.572em;
}

::slotted(a){
    color: var(--link-text-color, #444444) !important;
    text-decoration: underline;
}

h3 {
    color: var(--primary-color2, #004691) !important;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
}

details {
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 8px;
    box-sizing: border-box;
    font-size: var(--font-base, ${0});
    margin: 0 auto 20px auto;
    min-height: 5px;
    padding: 24px;
    position: relative;
    transition: all .3s;
    width: 100%;
}

details .collapse {
    display: none;
}

details hr {
    background-color: rgba(0, 0, 0, .1);
    border: none;
    height: 1px;
    margin: 1em 0;
}

details[open] {
    background-color: #ffffff;
    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
    min-height: 50px;
}

details[open] .collapse {
    display: initial;
    transition: .3s ease;
}

details[open] .expand {
    display: none;
}

summary {
    align-items: center;
    cursor: pointer;
    display: flex !important;
    position: relative;
}

summary:focus {
    outline: none !important;
}

summary::-webkit-details-marker {
    display: none
}

k-icon {
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    right:0;
    top:0;
}

@media only screen and (max-width: 414px) {
    :host([open]) h3 {
        margin-right: 24px;
    }

    h3 {
        font-size: 16px;
    }

    details {
        width: 90%;
    }

    details p,
    details ul {
        padding-right: 10px;
    }

    details p {
        margin-top: 0px;
    }
}

@media only screen and (max-width: 375px) {
    details ul {
        margin: 0px;
    }
}`),e(i.fontSize.p),e(i.fontSize.p));let s,l=t=>t;class p extends o{constructor(){super(),this.open=!1,this.title="Escriba un título"}static get properties(){return{open:{type:String,reflect:!0},title:{type:String}}}static get styles(){return a}firstUpdated(){this.open=function(t=""){return"string"==typeof t&&("true"===t.toLowerCase()&&!0)}(this.getAttribute("open"))}render(){return n(s||(s=l`<details ?open="${0}">
        <summary>
            <h3>${0}</h3>
            <k-icon class="expand" icon="alk-icon-abajo"></k-icon>
            <k-icon class="collapse" icon="alk-icon-cerrar1"></k-icon>
        </summary>
        <hr>
        <slot></slot>
    </details>`),this.open,this.title)}}export{p as Acordeon};
