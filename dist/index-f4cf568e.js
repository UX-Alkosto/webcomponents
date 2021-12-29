/*! webcomponents release: 2.0.0 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=e.get(this.cssText);return t&&void 0===i&&(e.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const n=t=>new s("string"==typeof t?t:t+"",i),o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new s(n,i)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return n(i)})(t):t;var l;const h=window.trustedTypes,a=h?h.emptyScript:"",c=window.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},d=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Eh(e,i);void 0!==s&&(this._$Eu.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eh(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{t?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=t.cssText,i.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ES(t,i,e=v){var s,n;const o=this.constructor._$Eh(t,e);if(void 0!==o&&!0===e.reflect){const r=(null!==(n=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:u.toAttribute)(i,e.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,i){var e,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=r,this[r]=h(i,t.type),this._$Ei=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.2");const b=globalThis.trustedTypes,m=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,y="?"+g,x=`<${y}>`,w=document,S=(t="")=>w.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,C=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,T=/"/g,M=/^(?:script|style|textarea)$/i,U=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),O=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),P=new WeakMap,N=w.createTreeWalker(w,129,null,!1),R=(t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=k;for(let i=0;i<e;i++){const e=t[i];let l,h,a=-1,c=0;for(;c<e.length&&(r.lastIndex=c,h=r.exec(e),null!==h);)c=r.lastIndex,r===k?"!--"===h[1]?r=j:void 0!==h[1]?r=C:void 0!==h[2]?(M.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=A):void 0!==h[3]&&(r=A):r===A?">"===h[0]?(r=null!=n?n:k,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?A:'"'===h[3]?T:E):r===T||r===E?r=A:r===j||r===C?r=k:(r=A,n=void 0);const u=r===A&&t[i+1].startsWith("/>")?" ":"";o+=r===k?e+x:a>=0?(s.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+g+u):e+g+(-2===a?(s.push(void 0),i):u)}const l=o+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==m?m.createHTML(l):l,s]};class B{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=R(t,i);if(this.el=B.createElement(h,e),N.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=N.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(g)){const e=a[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(g),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?W:"@"===i[1]?Z:D})}else l.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(M.test(s.tagName)){const t=s.textContent.split(g),i=t.length-1;if(i>0){s.textContent=b?b.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],S()),N.nextNode(),l.push({type:2,index:++n});s.append(t[i],S())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(g,t+1));)l.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,i){const e=w.createElement("template");return e.innerHTML=t,e}}function I(t,i,e=t,s){var n,o,r,l;if(i===O)return i;let h=void 0!==s?null===(n=e._$Cl)||void 0===n?void 0:n[s]:e._$Cu;const a=$(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=I(t,h._$AS(t,i.values),h,s)),i}class L{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(e,!0);N.currentNode=n;let o=N.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new q(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new K(o,this,t)),this.v.push(i),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=N.nextNode(),r++)}return n}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class q{constructor(t,i,e,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),$(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return _(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==z&&$(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(e);else{const t=new L(n,this),i=t.p(this.options);t.m(e),this.S(i),this._$AH=t}}_$AC(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new B(t)),i}M(t){_(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new q(this.A(S()),this.A(S()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class D{constructor(t,i,e,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,i,0),o=!$(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=I(this,s[e+r],i,r),l===O&&(l=this._$AH[r]),o||(o=!$(l)||l!==this._$AH[r]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.k(t)}k(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===z?void 0:t}}const J=b?b.emptyScript:"";class W extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends D{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=I(this,t,i,0))&&void 0!==e?e:z)===O)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const V=window.litHtmlPolyfillSupport;var F,G;null==V||V(B,q),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.2");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new q(i.insertBefore(S(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}Q.finalized=!0,Q._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.2");let Y;const tt={defaultSlot:U(Y||(Y=(t=>t)`<slot class="content"></slot>`)),defaultMaxWidth:1204,fontSize:{base:"16px",h1:"24px !important",h2:"18px !important",h3:"16px !important",h4:"15px !important",h5:"14px !important",h6:"14px !important",p:"14px"}};var it=Object.freeze({__proto__:null,common:tt});let et;const st=o(et||(et=(t=>t)`:host{align-items:center;background-color:var(--button-primary-background-color,#e63027);border:var(--button-primary-border,1px solid #e63027);border-radius:var(--button-radius,4px);box-sizing:border-box;color:var(--button-primary-text-color,#fff);cursor:pointer;display:inline-flex;font-family:var(--font-family, 'Arial');font-size:var(--font-base,${0});font-weight:400;justify-content:center;line-height:1.125rem;min-height:56px;outline:0;padding:16px 24px;text-align:center;text-decoration:none;transition:ease-in-out .3s all;width:auto}:host([variant=outline]){background-color:var(--button-outline-background-color,transparent);border:var(--button-outline-border,1px solid #e63027);color:var(--button-outline-text-color,#e63027)}:host(:focus),:host(:hover),:host([variant=outline]:focus),:host([variant=outline]:hover){background-color:var(--button-primary-background-color-hover,#ab1114);border-color:var(--button-primary-background-color-hover,#ab1114)}:host([variant=outline]:focus),:host([variant=outline]:hover){color:var(--button-primary-text-color-hover,#fff)}`),n(tt.fontSize.base));class nt extends Q{static get properties(){return{disabled:{type:Boolean},href:{type:String},loaded:{type:Boolean,reflect:!0},icon:{type:String},target:{type:String},variant:{type:String}}}static get styles(){return st}constructor(){super(),this.disabled=!1,this.href="",this.loaded=!1,this.icon="",this.target="_self",this.variant="primary",this.addEventListener("click",this._handleClick)}attributeChangedCallback(t,i,e){super.attributeChangedCallback(t,i,e),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,tt.defaultSlot}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}var ot=Object.freeze({__proto__:null,Button:nt});let rt;const lt=o(rt||(rt=(t=>t)`:host{box-sizing:border-box;color:var(--k-icon-color,#e63027);display:inline-block;font-size:1em}`));let ht,at=t=>t;class ct extends Q{static get properties(){return{icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}}}static get styles(){return lt}constructor(){super(),this.loaded=!1,this.target=""}attributeChangedCallback(t,i,e){super.attributeChangedCallback(t,i,e),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,U(ht||(ht=at`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css"><span class="${0}"></span>`),this.icon)}}var ut=Object.freeze({__proto__:null,Icon:ct});let dt;const vt=o(dt||(dt=(t=>t)`li{color:var(--text-color1);line-height:24px;list-style:none;padding:0 10px 10px 10px}li::before{content:"•";color:var(--primary-color1,#444);font-weight:700;display:inline-block;width:1em;margin-left:-1em}@media only screen and (min-width:768px){li::before{margin-left:-1em}}`));let pt,ft=t=>t;class bt extends Q{constructor(){super()}static get styles(){return vt}render(){return U(pt||(pt=ft`<li><slot></slot></li>`))}}var mt=Object.freeze({__proto__:null,ItemList:bt});let gt;const yt=o(gt||(gt=(t=>t)`:host{align-items:center;cursor:pointer;display:inline-block;font-family:var(--font-family, 'Arial');font-size:var(--font-base,${0})}a{color:var(--primary-color2,#004691);text-decoration:underline}`),n(tt.fontSize.base));let xt,wt,St=t=>t;class $t extends Q{static get properties(){return{href:{type:String},icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},title:{type:String},target:{type:String}}}static get styles(){return yt}constructor(){super(),this.href="#",this.icon="",this.loaded=!1,this.target="_self",this.title=""}attributeChangedCallback(t,i,e){super.attributeChangedCallback(t,i,e),this.dispatchEvent(new Event(`${t}-changed`))}render(){this.loaded=!0;const t=this.hasAttribute("icon")?U(xt||(xt=St`<k-icon icon="${0}"></k-icon>`),this.icon):"";return U(wt||(wt=St`<a href="${0}" target="${0}" title="${0}"><slot class="content"></slot>${0}</a>`),this.href,this.target,this.title,t)}}var _t=Object.freeze({__proto__:null,Link:$t});["acordeon","banner","banner-video","blog-article","card","gallery","grid","list","slider","title-underline"].forEach((t=>{const i=`k-${t}`,e=(s=(s=t).charAt(0).toUpperCase()+s.slice(1)).replace(/-([a-z])/g,(t=>t[1].toUpperCase()));var s;document.querySelectorAll(i).length&&function(t){switch(t){case"./components/acordeon/index.js":return import("./index-a19936fd.js");case"./components/banner/index.js":return import("./index-2c3d8c8e.js");case"./components/banner-video/index.js":return import("./index-286458f8.js");case"./components/blog-article/index.js":return import("./index-b76bc537.js");case"./components/button/index.js":return Promise.resolve().then((function(){return ot}));case"./components/card/index.js":return import("./index-083568a5.js");case"./components/common/index.js":return Promise.resolve().then((function(){return it}));case"./components/gallery/index.js":return import("./index-8b6fd62d.js");case"./components/grid/index.js":return import("./index-1757eaf0.js");case"./components/icon/index.js":return Promise.resolve().then((function(){return ut}));case"./components/li/index.js":return Promise.resolve().then((function(){return mt}));case"./components/link/index.js":return Promise.resolve().then((function(){return _t}));case"./components/list/index.js":return import("./index-1a78c5fd.js");case"./components/select/index.js":return import("./index-2d7ab69c.js");case"./components/slider/index.js":return import("./index-59f41aee.js");case"./components/title-underline/index.js":return import("./index-ae7f1dbc.js");default:return new Promise((function(i,e){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./components/${t}/index.js`).then((t=>{window.customElements.define(i,t[e])}))})),window.customElements.define("k-button",nt),window.customElements.define("k-icon",ct),window.customElements.define("k-li",bt),window.customElements.define("k-link",$t);export{tt as c,n as o,U as p,o as r,Q as s};
