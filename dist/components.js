/*! webcomponents release: 1.0.6 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class i{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,r=t=>{let r=s.get(t);return void 0===r&&s.set(t,r=new i(t,e)),r},o=t=>r("string"==typeof t?t:t+""),n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return r(s)},l=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t;var a,h,d,c;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=f){var s,r;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:p.toAttribute)(e,i.type);this.Πh=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this.Πh=null}}K(t,e){var i,s,r;const o=this.constructor,n=o.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:p.fromAttribute;this.Πh=n,this[n]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var g,b,y,v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(a=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(a,{ReactiveElement:m}),(null!==(d=(c=globalThis).reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,_="?"+k,S=`<${_}>`,$=document,C=(t="")=>$.createComment(t),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,H=/'/g,T=/"/g,B=/^(?:script|style|textarea)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),M=new WeakMap,L=$.createTreeWalker($,129,null,!1),I=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=A;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===A?"!--"===a[1]?n=N:void 0!==a[1]?n=U:void 0!==a[2]?(B.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=P):void 0!==a[3]&&(n=P):n===P?">"===a[0]?(n=null!=r?r:A,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?P:'"'===a[3]?T:H):n===T||n===H?n=P:n===N||n===U?n=A:(n=P,r=void 0);const c=n===P&&t[e+1].startsWith("/>")?" ":"";o+=n===A?i+S:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+k+c):i+k+(-2===h?(s.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==x?x.createHTML(l):l,s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,h]=I(t,e);if(this.el=W.createElement(a,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Z:q})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(B.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),L.nextNode(),l.push({type:2,index:++r});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===_)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)l.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,s){var r,o,n,l;if(e===R)return e;let a=void 0!==s?null===(r=i.Σi)||void 0===r?void 0:r[s]:i.Σo;const h=z(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a.O)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,s)),void 0!==s?(null!==(n=(l=i).Σi)&&void 0!==n?n:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=V(t,a.S(t,e.values),a,s)),e}class D{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);L.currentNode=r;let o=L.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new X(o,this,t)),this.l.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=L.nextNode(),n++)}return r}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Y{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=V(this,t,e),z(t)?t===O||null==t||""===t?(this.H!==O&&this.R(),this.H=O):t!==this.H&&t!==R&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$($.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=W.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(i);else{const t=new D(r,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new W(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new Y(this.k(C()),this.k(C()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class q{constructor(t,e,i,s,r){this.type=1,this.H=O,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(O),this.strings=i):this.H=O}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=V(this,t,e,0),o=!z(t)||t!==this.H&&t!==R,o&&(this.H=t);else{const s=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=V(this,s[i+n],e,n),l===R&&(l=this.H[n]),o||(o=!z(l)||l!==this.H[n]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+r[n+1]),this.H[n]=l}o&&!s&&this.W(t)}W(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===O?void 0:t}}class K extends q{constructor(){super(...arguments),this.type=4}W(t){t&&t!==O?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends q{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:O)===R)return;const s=this.H,r=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){V(this,t)}}var F,G,Q,tt,et,it;null===(b=(g=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(g,W,Y),(null!==(y=(v=globalThis).litHtmlVersions)&&void 0!==y?y:v.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(it=globalThis).litElementVersions)&&void 0!==F?F:it.litElementVersions=[]).push("3.0.0-rc.2");class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new Y(e.insertBefore(C(),t),t,void 0,i)}return n.I(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return R}}st.finalized=!0,st._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:st}),null===(et=(tt=globalThis).litElementPlatformSupport)||void 0===et||et.call(tt,{LitElement:st});const rt={defaultSlot:j`<slot class="content"></slot>`,defaultMaxWidth:1204,fontSize:{base:"16px",h1:"24px !important",h2:"18px !important",h3:"16px !important",h4:"15px !important",h5:"14px !important",h6:"14px !important",p:"14px"}},ot=n`h3{color:var(--primary-color2,#004691)!important;font-size:18px}details{width:100%;min-height:5px;padding:25px 15px 25px 45px;margin:0 auto 20px auto;position:relative;font-size:var(--font-base,${o(rt.fontSize.p)});border:1px solid rgba(0,0,0,.1);border-radius:15px;box-sizing:border-box;transition:all .3s}details[open]{min-height:50px;background-color:#fff;box-shadow:2px 2px 10px rgba(0,0,0,.2)}::slotted(ul){color:var(--text-color1,#444);font-weight:300;font-size:14px;line-height:24px;margin-left:10px;padding:0}::slotted(p){color:var(--text-color1,#444);font-size:var(--font-base,${o(rt.fontSize.p)});line-height:1.572em}::slotted(li:before){content:"•";color:var(--primary-color1);margin-right:10px;font-size:20px}::slotted(a){color:var(--link-text-color,#444)!important;text-decoration:underline}summary{display:flex!important;justify-content:space-between;align-items:center;cursor:pointer}// summary:focus{outline:0!important}summary::-webkit-details-marker{display:none}.control-icon{fill:var(--main-naranja);transition:.3s ease;pointer-events:none;position:absolute;top:38px;right:10px}.control-icon-close{display:none}:host([open]) .control-icon-close{display:initial;transition:.3s ease}:host([open]) .control-icon-expand{display:none}:host([open]) summary:hover::after{animation:pulse 1s ease}:host([open]) .tit_pregunta{margin-bottom:20px!important}@keyframes pulse{25%{transform:scale(1.1)}50%{transform:scale(1)}75%{transform:scale(1.1)}100%{transform:scale(1)}}.fade-in-top{-webkit-animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@media only screen and (max-width:414px){details{padding:15px 15px 15px 15px}details p,details ul{padding-right:10px}details p{margin-top:0}.control-icon{top:25px;right:5px}:host([open]) .tit_pregunta{margin-bottom:10px!important}}@media only screen and (max-width:375px){details ul{margin:0}}`;const nt=n`:host{color:var(--text-color1,#444);display:flex;flex-wrap:wrap;font-family:var(--font-family, 'Arial');font-size:var(--font-base,${o(rt.fontSize.base)});justify-content:center;margin-bottom:2rem;overflow:hidden}:host([type=full]) .container{flex-wrap:wrap}:host([type=full]) .content{text-align:center;align-items:stretch}:host([type=left]),:host([type=right]){background-color:var(--k-brand-banner-background-color,#f5f5f5)}:host([type=left-cut]) .container,:host([type=right-cut]) .container{background-color:var(--k-brand-banner-background-color,#f5f5f5)}:host([type=left]) .content,:host([type=right]) .content{align-items:flex-start}::slotted(h1),::slotted(h2),::slotted(h3){color:var(--primary-color2,#004691)!important}::slotted(h1){font-size:${o(rt.fontSize.h1)}}::slotted(h2){font-size:${o(rt.fontSize.h2)}}::slotted(h3){font-size:${o(rt.fontSize.h3)}}::slotted(h4){font-size:${o(rt.fontSize.h4)}}::slotted(h5){font-size:${o(rt.fontSize.h5)}}::slotted(p){color:var(--text-color1,#444);font-size:var(--font-base,${o(rt.fontSize.p)});line-height:1.572em}::slotted(k-button){width:100%}.container{display:flex;flex:1;flex-direction:column;height:100%;justify-content:center;max-width:${o(`${rt.defaultMaxWidth}px`)}}.content,section{align-items:center;display:flex}.content{flex:1;flex-direction:column;justify-content:center;padding:1rem;order:2}.full{flex-basis:100%}.left,.left-cut,.right,.right-cut{flex-basis:100%}.full img,.left img,.left-cut img,.right img,.right-cut img{max-width:100%;object-fit:cover;width:100%}@media screen and (min-width:420px){::slotted(k-button){width:auto}}@media screen and (min-width:768px){:host([type=full]) .content{align-items:center;flex-basis:100%}.container{flex-direction:row;justify-content:space-between}.content{align-items:flex-start;order:unset;padding:2rem}.left,.right{flex-basis:50%}.left-cut,.right-cut{align-items:stretch;flex-basis:40%}.left-cut{margin-left:0;filter:drop-shadow(10px 0 0 var(--primary-color2, #004691))}.left-cut img{clip-path:polygon(0 0,0 100%,90% 100%,100% 0)}.right-cut{margin-right:0;filter:drop-shadow(-10px 0 0 var(--primary-color2, #004691))}.right-cut img{clip-path:polygon(0 0,10% 100%,100% 100%,100% 0)}}`;const lt=n`:host{align-items:center;background-color:var(--button-primary-background-color,#e63027);border:var(--button-primary-border,1px solid #e63027);border-radius:var(--button-radius,4px);box-sizing:border-box;color:var(--button-primary-text-color,#fff);cursor:pointer;display:inline-flex;font-family:var(--font-family, 'Arial');font-size:var(--font-base,${o(rt.fontSize.base)});font-weight:400;justify-content:center;line-height:1.125rem;min-height:56px;outline:0;padding:16px 24px;text-align:center;text-decoration:none;transition:ease-in-out .3s all;width:auto}:host([variant=outline]){background-color:var(--button-outline-background-color,transparent);border:var(--button-outline-border,1px solid #e63027);color:var(--button-outline-text-color,#e63027)}:host(:focus),:host(:hover),:host([variant=outline]:focus),:host([variant=outline]:hover){background-color:var(--button-primary-background-color-hover,#ab1114);border-color:var(--button-primary-background-color-hover,#ab1114)}:host([variant=outline]:focus),:host([variant=outline]:hover){color:var(--button-primary-text-color-hover,#fff)}`;const at=n`:host{background-color:var(--k-card-background-color,#fff);border-radius:var(--k-card-border-radius,4px);display:inline-block;margin:.5em;max-width:100%;padding:1rem;transition:ease-in-out .3s all;width:auto}:host([href]){cursor:pointer}:host([shadow]){box-shadow:0 2px 3px 2px rgba(0,0,0,.1)}:host([shadow]:focus),:host([shadow]:hover){box-shadow:0 2px 5px 2px rgba(0,0,0,.2)}:host([type=category-item]){align-items:center;display:flex;flex-direction:column;justify-content:center;padding:.5rem;text-align:center}:host([type=icon-item]){margin-top:4rem}:host([type=icon-item]) ::slotted(k-icon){border:solid 1px var(--primary-color1);border-radius:50px;font-size:40px;height:90px;margin-top:-30px;width:90px;align-items:center;text-align:center;display:flex;justify-content:center;background-color:#fff}:host([type=product-item]){margin-top:2rem;text-align:center}:host([type=product-item]) ::slotted(img),:host([type=product-item]) ::slotted(k-img){margin-top:-3rem;max-width:100%;width:auto;will-change:transform;transition:.3s ease-in-out transform}:host([type=product-item]:hover) ::slotted(img),:host([type=product-item]:hover) ::slotted(k-img){transform:scale3d(1.05,1.05,1)}:host([type=product-item]) ::slotted(p){text-align:initial}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(strong){color:var(--primary-color2,#004691)!important}::slotted(p){color:var(--text-color1,#444);display:none;font-size:var(--font-base,14px);line-height:1.572em}:host([type=category-item]) ::slotted(k-icon){font-size:var(--font-base,24px);line-height:1.572em;margin:0}:host([type=category-item]) ::slotted(p){display:block;font-size:var(--font-base,14px);line-height:1.125em;margin:0}@media screen and (min-width:768px){::slotted(p){display:block}}`;const ht=n`:host{display:flex;flex:1;flex-wrap:no-wrap;justify-content:center;margin:0 auto 2rem;padding:0 1rem}.content{display:grid;grid-gap:1rem;width:100%}@media screen and (min-width:768px){:host{padding:0}}`;const dt=n`:host{display:block}img{height:auto;max-width:100%;object-fit:cover;width:auto}`;const ct=n`:host{box-sizing:border-box;color:var(--k-icon-color,#e63027);display:inline-block;font-size:1em}`;const pt=n`:host{align-items:center;cursor:pointer;display:inline-block;font-family:var(--font-family, 'Arial');font-size:var(--font-base,${o(rt.fontSize.base)})}a{color:var(--primary-color2,#004691);text-decoration:underline}`;const ut=n`.k-slider{box-sizing:border-box;position:relative;width:100%}.k-slider *{box-sizing:inherit}.k-slider__track{overflow:hidden}.k-slider__slides{align-items:stretch;backface-visibility:hidden;background-color:var(--k-slider-background-color,#fff);display:flex;flex-wrap:nowrap;list-style:none;overflow:hidden;padding:.5em 0;position:relative;touch-action:pan-Y;transform-style:preserve-3d;width:100%;will-change:transform;white-space:nowrap}.k-slider__slides--dragging{user-select:none}.k-slider__slide{align-items:stretch;display:flex;justify-content:center;width:100%;height:auto;flex-shrink:0;white-space:normal;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.k-slider__slide img{max-width:100%}.k-slider__slide k-card{max-height:100%;width:100%}.k-slider__slide a{user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.k-slider__arrows{-webkit-touch-callout:none;user-select:none}.k-slider__bullets{-webkit-touch-callout:none;user-select:none}.k-slider--rtl{direction:rtl}`,ft=n`.k-slider__arrow{align-items:center;background-color:#fff;border-radius:48px;border:none;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);cursor:pointer;display:flex;height:48px;justify-content:center;line-height:1;opacity:1;padding:12px;position:absolute;top:50%;transition:opacity 150ms ease,border .3s ease-in-out;transform:translateY(-50%);width:48px;z-index:2}.k-slider__arrow k-icon{font-size:20px}.k-slider__arrow:focus{outline:0}.k-slider__arrow:hover{border-color:#fff}.k-slider__arrow--left{left:1em}.k-slider__arrow--right{right:1em}.k-slider__arrow--disabled{opacity:.33}.k-slider__bullets{position:absolute;z-index:2;bottom:-2em;left:50%;display:inline-flex;list-style:none;transform:translateX(-50%)}.k-slider__bullet{background-color:var(--k-slider-bullet-color,#f5f5f5);width:12px;height:12px;padding:0;border-radius:50%;border:0;transition:all .3s ease-in-out;cursor:pointer;line-height:0;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);margin:0 .5em}.k-slider__bullet:focus{outline:0}.k-slider__bullet:focus,.k-slider__bullet:hover{background-color:var(--k-slider-bullet-color-hover,#004691)}.k-slider__bullet--active{background-color:var(--carousel-nav-color,#004691)}.k-slider--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.k-slider--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}:host([mobile-arrows=false]) .k-slider__arrow,:where(:host([arrows=false]).k-slider__arrow){display:none}:host([mobile-bullets=false]) .k-slider__bullets,:where(:host([bullets=false]).k-slider__bullets){display:none}@media screen and (min-width:768px){:host([desktop-arrows=false]) .k-slider__arrow,:where(:host([arrows=false]).k-slider__arrow){display:none}:host([desktop-bullets=false]) .k-slider__bullets,:where(:host([bullets=false]).k-slider__bullets){display:none}:host([desktop-arrows=true]) .k-slider__arrow,:where(:host([arrows=true]).k-slider__arrow){display:block}:host([desktop-bullets=true]) .k-slider__bullets,:where(:host([bullets=true]).k-slider__bullets){display:block}}`,mt=n`:host{display:flex;flex:1;flex-wrap:no-wrap;justify-content:center;margin:0 auto 2rem;padding:0}:host([bullets=true]){padding-bottom:2em}`;function gt(t=""){return"string"==typeof t&&("true"===t.toLowerCase()&&!0)}const bt=n`:host{border-bottom:1px solid var(--k-title-underline-border-color,#e0e0e0);display:flex;font-family:var(--font-family, 'Arial');margin:0 0 1rem;max-width:100%;padding:0;transition:ease-in-out .3s all;width:auto}:host([type=center]){justify-content:center}:host([type=left]){justify-content:flex-start}:host([type=right]){justify-content:flex-end}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){box-shadow:inset 0 -1px 0 0 var(--primary-color1,#e63027),0 2px 0 0 var(--primary-color1,#e63027);color:var(--primary-color2,#004691)!important;display:inline-block;margin:0!important;padding:.5em 0;position:relative}::slotted(h1){font-size:${o(rt.fontSize.h1)}}::slotted(h2){font-size:${o(rt.fontSize.h2)}}::slotted(h3){font-size:${o(rt.fontSize.h3)}}::slotted(h4){font-size:${o(rt.fontSize.h4)}}::slotted(h5){font-size:${o(rt.fontSize.h5)}}::slotted(h6){font-size:${o(rt.fontSize.h6)}}::slotted(p){font-size:${o(rt.fontSize.p)}}`;window.customElements.define("k-acordeon",class extends st{constructor(){super(),this.open=!1,this.title="Escriba un título"}static get properties(){return{open:{type:String,reflect:!0},title:{type:String}}}static get styles(){return ot}firstUpdated(){this.open=function(t=""){return"string"==typeof t&&("true"===t.toLowerCase()&&!0)}(this.getAttribute("open"))}render(){return j`<details ?open="${this.open}"><summary><h3 class="tit_pregunta">${this.title}</h3><svg class="control-icon control-icon-expand" width="40" height="40" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more"/></svg> <svg class="control-icon control-icon-close" width="40" height="40" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"/></svg></summary><slot></slot></details>`}}),window.customElements.define("k-banner",class extends st{static get properties(){return{loaded:{type:Boolean,reflect:!0},height:{type:Number},src:{type:String},type:{type:String},width:{type:Number}}}static get styles(){return nt}constructor(){super(),this.height=0,this.width=null,this.loaded=!1,this.src="",this.type="left"}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,j`${this._dynamicStyles()}<div class="container">${"left"==this.type||"left-cut"==this.type||"full"==this.type?this._getImage({height:this.height,src:this.src,type:this.type}):""}<slot class="content"></slot>${"right"==this.type||"right-cut"==this.type?this._getImage({height:this.height,src:this.src,type:this.type}):""}</div>`}_dynamicStyles(){const t=""+(null===this.width?"flex-basis: 50% !important;":`flex-basis: ${this.width}px !important;`);return j`<style>@media screen and (min-width:768px){.left,.right{${t}}}</style>`}_getImage({height:t,src:e,type:i}){if(e.length)return j`<section class="${i}"><img height="${t}" src="${e}"></section>`}}),window.customElements.define("k-button",class extends st{static get properties(){return{disabled:{type:Boolean},href:{type:String},loaded:{type:Boolean,reflect:!0},icon:{type:String},target:{type:String},variant:{type:String}}}static get styles(){return lt}constructor(){super(),this.disabled=!1,this.href="",this.loaded=!1,this.icon="",this.target="_self",this.variant="primary",this.addEventListener("click",this._handleClick)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,rt.defaultSlot}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}),window.customElements.define("k-card",class extends st{static get properties(){return{href:{type:String},loaded:{type:Boolean,reflect:!0},type:{type:String},target:{type:String},shadow:{type:Boolean,reflect:!0}}}static get styles(){return at}constructor(){super(),this.href="",this.loaded=!1,this.target="_self",this.type="default",this.shadow=!0,this.addEventListener("click",this._handleClick)}render(){return this.loaded=!0,rt.defaultSlot}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}),window.customElements.define("k-grid",class extends st{static get properties(){return{"desktop-columns":{type:Number,reflect:!0},"mobile-columns":{type:Number,reflect:!0},width:{type:Number,reflect:!0}}}static get styles(){return ht}constructor(){super(),this["desktop-columns"]=6,this["mobile-columns"]=2,this.width=rt.defaultMaxWidth}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){return j`${this._dynamicStyles()}${rt.defaultSlot}`}_dynamicStyles(){const t=this["desktop-columns"],e=this["mobile-columns"],i=`${0===this.width||null===this.width?rt.defaultMaxWidth:this.width}px`;return j`<style>:host{max-width:${i}}@media screen and (min-width:360px){.content{grid-template-columns:repeat(auto-fill,minmax(calc(calc(100% / ${e}) - 16px),1fr))}}@media screen and (min-width:768px){.content{grid-template-columns:repeat(auto-fill,minmax(calc(calc(100% / ${t}) - 16px),1fr))}}</style>`}}),window.customElements.define("k-img",class extends st{static get properties(){return{alt:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},height:{type:Number,reflect:!0},src:{type:String,reflect:!0},srcset:{type:String,reflect:!0},width:{type:Number,reflect:!0}}}static get styles(){return dt}constructor(){super(),this.loaded=!1}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){if(void 0!==this.src)return this.loaded=!0,j`${this._dynamicStyles()}<img loading="lazy" alt="${this.alt||""}" height="${this.height||""}" src="${this.src}" srcset="${this.srcset||""}" width="${this.width||""}">`}_dynamicStyles(){const t=""+(0===this.height||void 0===this.height?"auto":`${this.height}px`),e=""+(0===this.width||void 0===this.width?"auto":`${this.width}px`);return j`<style>:host{height:${t};width:${e}}</style>`}}),window.customElements.define("k-icon",class extends st{static get properties(){return{icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}}}static get styles(){return ct}constructor(){super(),this.loaded=!1,this.target=""}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,j`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css"><span class="${this.icon}"></span>`}}),window.customElements.define("k-link",class extends st{static get properties(){return{href:{type:String},icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},title:{type:String},target:{type:String}}}static get styles(){return pt}constructor(){super(),this.href="#",this.icon="",this.loaded=!1,this.target="_self",this.title=""}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){this.loaded=!0;const t=this.hasAttribute("icon")?j`<k-icon icon="${this.icon}"></k-icon>`:"";return j`<a href="${this.href}" target="${this.target}" title="${this.title}"><slot class="content"></slot>${t}</a>`}}),window.customElements.define("k-slider",class extends st{static get properties(){return{arrows:{type:Boolean},bullets:{type:Boolean},"desktop-arrows":{type:Boolean},"desktop-bullets":{type:Boolean},"desktop-items":{type:Number},"items-space":{type:Number},loaded:{type:Boolean,reflect:!0},"mobile-arrows":{type:Boolean},"mobile-bullets":{type:Boolean},"mobile-items":{type:Number},peek:{type:Number},width:{type:Number}}}static get styles(){return[mt,ut,ft]}constructor(){super(),this.arrows=!1,this.bullets=!1,this.countSlides=this.childElementCount,this["desktop-arrows"]=!1,this["desktop-bullets"]=!1,this["desktop-items"]=6,this["items-space"]=16,this.loaded=!1,this["mobile-arrows"]=!1,this["mobile-bullets"]=!1,this["mobile-items"]=2,this.peek=0,this.width=1204}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`)),"desktop-items"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"mobile-items"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}firstUpdated(){this.arrows=gt(this.getAttribute("arrows")),this["desktop-arrows"]=!!gt(this.getAttribute("desktop-arrows"))||this.arrows,this["desktop-bullets"]=!!gt(this.getAttribute("desktop-bullets"))||this.bullets,this["mobile-arrows"]=!!gt(this.getAttribute("mobile-arrows"))||this.arrows,this["mobile-bullets"]=!!gt(this.getAttribute("mobile-bullets"))||this.bullets,this._initSlider()}render(){return j`${this._dynamicStyles()}<div class="k-slider"><div data-glide-el="track" class="k-slider__track"><slot class="k-slider__slides"></slot></div>${this["desktop-arrows"]||this["mobile-arrows"]?this._getArrows():""} ${this["desktop-bullets"]||this["mobile-bullets"]?this._getDots():""}</div>`}_dynamicStyles(){const t=`${0===this.width||null===this.width||void 0===this.width?1204:this.width}`;return j`<style>:host{max-width:${t}}</style>`}_getArrows(){return j`<div class="k-slider__arrows" data-glide-el="controls"><button class="k-slider__arrow k-slider__arrow--left" data-glide-dir="<"><k-icon icon="alk-icon-izquierda"></k-icon></button> <button class="k-slider__arrow k-slider__arrow--right" data-glide-dir=">"><k-icon icon="alk-icon-derecha"></k-icon></button></div>`}_getDots(){const t=[];for(let e=0;e<this.countSlides;e++)t.push(j`<button class="k-slider__bullet" data-glide-dir="=${e}"></button>`);return j`<div class="k-slider__bullets" data-glide-el="controls[nav]">${t}</div>`}async _initSlider(){const t=await import("./glide.esm-4699970a.js").then((t=>t.default));let e=this.innerHTML;return this.shadowRoot.querySelector(".k-slider__slides").innerHTML=e,this.innerHTML="",this.loaded=!0,new t(this.shadowRoot.querySelector(".k-slider"),{classes:{direction:{ltr:"k-slider--ltr",rtl:"k-slider--rtl"},slider:"k-slider--slider",carousel:"k-slider--carousel",swipeable:"k-slider--swipeable",dragging:"k-slider--dragging",cloneSlide:"k-slider__slide--clone",activeNav:"k-slider__bullet--active",activeSlide:"k-slider__slide--active",disabledArrow:"k-slider__arrow--disabled"},gap:this["items-space"],type:"carousel",peek:this.peek,perView:this["desktop-items"],breakpoints:{768:{perView:this["mobile-items"],peek:0},359:{perView:1,peek:0}}}).mount()}}),window.customElements.define("k-title-underline",class extends st{static get properties(){return{loaded:{type:Boolean,reflect:!0},type:{type:String}}}static get styles(){return bt}constructor(){super(),this.loaded=!1,this.type="left",this.shadow=!0}render(){return this.loaded=!0,rt.defaultSlot}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}});
