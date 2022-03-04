/*! webcomponents release: 2.0.6 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),n=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t;var l;const a=window.trustedTypes,h=a?a.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:c.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.0");const f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,y="?"+g,w=`<${y}>`,x=document,k=(t="")=>x.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,C=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,z=/'/g,U=/"/g,E=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),P=new WeakMap,N=x.createTreeWalker(x,129,null,!1),I=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=j;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===j?"!--"===a[1]?r=_:void 0!==a[1]?r=C:void 0!==a[2]?(E.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=A):void 0!==a[3]&&(r=A):r===A?">"===a[0]?(r=null!=o?o:j,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?A:'"'===a[3]?U:z):r===U||r===z?r=A:r===_||r===C?r=j:(r=A,o=void 0);const c=r===A&&t[e+1].startsWith("/>")?" ":"";n+=r===j?i+w:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+g+c):i+g+(-2===h?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,s]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=I(t,e);if(this.el=R.createElement(a,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?J:"@"===e[1]?W:Y})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(E.test(s.tagName)){const t=s.textContent.split(g),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),N.nextNode(),l.push({type:2,index:++o});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(g,t+1));)l.push({type:7,index:o}),t+=g.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var o,n,r,l;if(e===M)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=$(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=B(t,a._$AS(t,e.values),a,s)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);N.currentNode=o;let n=N.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new L(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Z(n,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=N.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),$(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=R.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new D(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new R(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new L(this.A(k()),this.A(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,e,0),n=!$(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=B(this,s[i+r],e,r),l===M&&(l=this._$AH[r]),n||(n=!$(l)||l!==this._$AH[r]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.C(t)}C(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends Y{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===O?void 0:t}}const H=f?f.emptyScript:"";class J extends Y{constructor(){super(...arguments),this.type=4}C(t){t&&t!==O?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class W extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:O)===M)return;const s=this._$AH,o=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==O&&(s===O||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const K=window.litHtmlPolyfillSupport;var V,F;null==K||K(R,L),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.0");class G extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new L(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}G.finalized=!0,G._$litElement$=!0,null===(V=globalThis.litElementHydrateSupport)||void 0===V||V.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.0");let X;const tt=n(X||(X=(t=>t)`:host{box-sizing:border-box;color:var(--k-icon-color,#e63027);display:inline-block;font-size:1em}`));let et,it=t=>t;class st extends G{static get properties(){return{icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}}}static get styles(){return tt}constructor(){super(),this.loaded=!1,this.target=""}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,T(et||(et=it`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css"><span class="${0}"></span>`),this.icon)}}var ot=Object.freeze({__proto__:null,Icon:st});let nt;const rt=n(nt||(nt=(t=>t)`li{color:var(--text-color1);line-height:24px;list-style:none;padding:0 10px 10px 10px}li::before{content:"•";color:var(--primary-color1,#444);font-weight:700;display:inline-block;width:1em;margin-left:-1em}@media only screen and (min-width:768px){li::before{margin-left:-1em}}`));let lt,at=t=>t;class ht extends G{constructor(){super()}static get styles(){return rt}render(){return T(lt||(lt=at`<li><slot></slot></li>`))}}var dt=Object.freeze({__proto__:null,ItemList:ht});let ct;const ut={defaultSlot:T(ct||(ct=(t=>t)`<slot class="content"></slot>`)),defaultMaxWidth:1204,fontSize:{base:"16px",h1:"24px !important",h2:"18px !important",h3:"16px !important",h4:"15px !important",h5:"14px !important",h6:"14px !important",p:"14px"}};var pt=Object.freeze({__proto__:null,common:ut});let vt;const mt=n(vt||(vt=(t=>t)`:host{display:none}:host([closed]),:host([open]){display:block}::slotted(h1),::slotted(h2),::slotted(h3){color:var(--primary-color2,#004691)!important}::slotted(h1){font-size:${0}}::slotted(h2){font-size:${0}}::slotted(h3){font-size:${0}}::slotted(h4){font-size:${0}}::slotted(h5){font-size:${0}}:host([open]) .modal{animation:.3s forwards slideUp}:host([closed]) .modal{animation:.3s forwards slideDown}@keyframes slideDown{0%{transform:translateY(0)}100%{transform:translateY(100%)}}@keyframes slideUp{0%{transform:translateY(100%)}100%{transform:translateY(0)}}.overlay{animation-play-state:paused;background-color:var(--k-modal-shadow-background-color,rgba(0,0,0,.7));bottom:0;left:0;position:fixed;right:0;top:0;transition:ease-in-out .3s all;z-index:9999}.modal{animation-play-state:paused;background-color:var(--k-modal-background-color,#fff);bottom:0;box-shadow:0 0 6px rgba(0,0,0,.4);left:0;max-height:90vh;max-width:775px;overflow:hidden;position:fixed;width:100%;z-index:10000}.modal-body{box-sizing:border-box;overflow-x:hidden;overflow-y:auto;padding:24px}:host([type=video]) .modal-body{padding:0}:host([type=video]) .modal,:host([type=video]) .modal-header{--k-icon-color:#fff;background-color:transparent;border-bottom:0;box-shadow:none}:host([type=video]) .modal-header h4{color:var(--k-modal-video-header-text-color,#fff)}:host([type=video]) ::slotted(iframe){box-shadow:0 0 6px rgba(0,0,0,.4)}.modal-body::-webkit-scrollbar-track{border-radius:10px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar{width:5px;background-color:rgba(255,255,255,0);opacity:0}.modal-body::-webkit-scrollbar-thumb{border-radius:10px;background-color:#444;transition:.3s}.modal-header{--k-icon-color:var(--primary-color2, #004691);align-items:center;background-color:var(--k-modal-header-background-color,#fff);border-bottom:2px solid var(--primary-color1,#e63027);box-sizing:border-box;display:flex;height:52px;padding:0 16px 0 24px}.modal-header h4{color:var(--text-color1,#444);font-size:${0};font-weight:400;margin:0}.modal-header k-icon{cursor:pointer;font-size:30px;font-weight:600;height:30px;margin-left:auto}@media screen and (min-width:768px){.modal{bottom:initial;height:434px;left:50%;top:50%;transform:translate(-50%,-50%)}.modal-body{height:382px;max-height:calc(90vh - 52px)}@keyframes slideDown{0%{transform:translate(-50%,-50%)}100%{transform:translate(-50%,100%)}}@keyframes slideUp{0%{transform:translate(-50%,100%)}100%{transform:translate(-50%,-50%)}}}`),o(ut.fontSize.h1),o(ut.fontSize.h2),o(ut.fontSize.h3),o(ut.fontSize.h4),o(ut.fontSize.h5),o(ut.fontSize.h2));let ft,bt=t=>t;class gt extends G{static get properties(){return{name:{type:String,reflect:!0},open:{type:Boolean,reflect:!0,attribute:"open"},closed:{type:Boolean,reflect:!0,attribute:"closed"}}}static get styles(){return mt}constructor(){super(),this.closed=!1,this.open=!1,this.name="",this.addEventListener("open",this._handleOpen)}get isOpen(){return this.open}render(){return T(ft||(ft=bt`<div class="overlay" @click="${0}"></div><div class="modal" aria-hidden="${0}" id="${0}"><div class="modal-header"><h4><slot name="header"></slot></h4><k-icon icon="alk-icon-close" name="close" @click="${0}"></k-icon></div><div class="modal-body"><slot name="body"></slot></div><div class="modal-footer"><slot name="footer"></slot></div></div>`),this._handleClose,!this.open,this.name,this._handleClose)}_handleOpen(){this.open=!0,document.querySelector("body").style.setProperty("overflow","hidden")}_handleClose(){this.closed=!0,this.open=!1,document.querySelector("body").style.removeProperty("overflow"),setTimeout((()=>{this.removeAttribute("closed")}),300)}}var yt=Object.freeze({__proto__:null,Modal:gt});window.customElements.define("k-icon",st),window.customElements.define("k-li",ht),window.customElements.define("k-modal",gt);const wt={},xt=new IntersectionObserver(((t,e)=>{t.forEach((async t=>{if(t.isIntersecting){const s=t.target.tagName.toLowerCase(),o=s.replace("k-",""),n=(i=(i=o).charAt(0).toUpperCase()+i.slice(1)).replace(/-([a-z])/g,(t=>t[1].toUpperCase()));e.unobserve(t.target),wt[s]||(wt[s]=!0,await function(t){switch(t){case"./components/acordeon/index.js":return import("./webcomponents-2.0.6-b67f231b.js");case"./components/banner/index.js":return import("./webcomponents-2.0.6-1ef6fa4e.js");case"./components/banner-video/index.js":return import("./webcomponents-2.0.6-a8b67c18.js");case"./components/blog-article/index.js":return import("./webcomponents-2.0.6-6b76886b.js");case"./components/button/index.js":return import("./webcomponents-2.0.6-460927c8.js");case"./components/card/index.js":return import("./webcomponents-2.0.6-cfe3844c.js");case"./components/common/index.js":return Promise.resolve().then((function(){return pt}));case"./components/gallery/index.js":return import("./webcomponents-2.0.6-8e2bc1ac.js");case"./components/grid/index.js":return import("./webcomponents-2.0.6-6d4464f7.js");case"./components/icon/index.js":return Promise.resolve().then((function(){return ot}));case"./components/li/index.js":return Promise.resolve().then((function(){return dt}));case"./components/link/index.js":return import("./webcomponents-2.0.6-e50c728c.js");case"./components/list/index.js":return import("./webcomponents-2.0.6-0bca1f4c.js");case"./components/modal/index.js":return Promise.resolve().then((function(){return yt}));case"./components/slider/index.js":return import("./webcomponents-2.0.6-a11491b7.js");case"./components/title-underline/index.js":return import("./webcomponents-2.0.6-a0c5c325.js");default:return new Promise((function(e,i){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./components/${o}/index.js`).then((t=>{window.customElements.define(s,t[n])})))}var i}))}),{rootMargin:"0px 0px 250px 0px"});["acordeon","banner","banner-video","blog-article","button","card","gallery","grid","link","list","slider","title-underline"].forEach((t=>{const e=`k-${t}`,i=document.querySelectorAll(e);i.length&&i.forEach((t=>xt.observe(t)))}));export{T as $,ut as c,o,n as r,G as s};
