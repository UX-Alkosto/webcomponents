/*! webcomponents release: 2.2.1 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t))}return t}toString(){return this.cssText}};const n=t=>new s("string"==typeof t?t:t+"",void 0,o),r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return n(e)})(t):t;var a;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",p=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m},f="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var o;const i=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,i)=>{e?o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=v){var i;const s=this.constructor._$Ep(t,o);if(void 0!==s&&!0===o.reflect){const n=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:u).toAttribute(e,o.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:u;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var b;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.3");const y=window,x=y.trustedTypes,w=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,$="?"+j,_=`<${$}>`,S=document,C=()=>S.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,E="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,U=/>/g,P=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,N=/"/g,F=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),R=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,q=S.createTreeWalker(S,129,null,!1);function D(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const Y=(t,e)=>{const o=t.length-1,i=[];let s,n=2===e?"<svg>":"",r=M;for(let e=0;e<o;e++){const o=t[e];let l,a,d=-1,c=0;for(;c<o.length&&(r.lastIndex=c,a=r.exec(o),null!==a);)c=r.lastIndex,r===M?"!--"===a[1]?r=O:void 0!==a[1]?r=U:void 0!==a[2]?(F.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=P):void 0!==a[3]&&(r=P):r===P?">"===a[0]?(r=null!=s?s:M,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?P:'"'===a[3]?N:T):r===N||r===T?r=P:r===O||r===U?r=M:(r=P,s=void 0);const h=r===P&&t[e+1].startsWith("/>")?" ":"";n+=r===M?o+_:d>=0?(i.push(l),o.slice(0,d)+k+o.slice(d)+j+h):o+j+(-2===d?(i.push(void 0),e):h)}return[D(t,n+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,n=0;const r=t.length-1,l=this.parts,[a,d]=Y(t,e);if(this.el=H.createElement(a,o),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=q.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(k)||e.startsWith(j)){const o=d[n++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+k).split(j),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?Q:"@"===e[1]?X:K})}else l.push({type:6,index:s})}for(const e of t)i.removeAttribute(e)}if(F.test(i.tagName)){const t=i.textContent.split(j),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],C()),q.nextNode(),l.push({type:2,index:++s});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===$)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(j,t+1));)l.push({type:7,index:s}),t+=j.length-1}s++}}static createElement(t,e){const o=S.createElement("template");return o.innerHTML=t,o}}function W(t,e,o=t,i){var s,n,r,l;if(e===R)return e;let a=void 0!==i?null===(s=o._$Co)||void 0===s?void 0:s[i]:o._$Cl;const d=z(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,o,i)),void 0!==i?(null!==(r=(l=o)._$Co)&&void 0!==r?r:l._$Co=[])[i]=a:o._$Cl=a),void 0!==a&&(e=W(t,a._$AS(t,e.values),a,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(o,!0);q.currentNode=s;let n=q.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Z(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new tt(n,this,t)),this._$AV.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(n=q.nextNode(),r++)}return q.currentNode=S,s}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Z{constructor(t,e,o,i){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),z(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=H.createElement(D(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(o);else{const t=new J(s,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new H(t)),e}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new Z(this.k(C()),this.k(C()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,o,i,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const s=this.strings;let n=!1;if(void 0===s)t=W(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const i=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=W(this,i[o+r],e,r),l===R&&(l=this._$AH[r]),n||(n=!z(l)||l!==this._$AH[r]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}n&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const G=x?x.emptyScript:"";class Q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class X extends K{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=W(this,t,e,0))&&void 0!==o?o:L)===R)return;const i=this._$AH,s=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(H,Z),(null!==(b=y.litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.8.0");var ot,it;class st extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,s;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new Z(e.insertBefore(C(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}st.finalized=!0,st._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");let rt;const lt={defaultSlot:I(rt||(rt=(t=>t)`<slot class="content"></slot>`)),defaultMaxWidth:1204,fontSize:{base:"16px",h1:"24px !important",h2:"18px !important",h3:"16px !important",h4:"15px !important",h5:"14px !important",h6:"14px !important",p:"14px"}};var at=Object.freeze({__proto__:null,common:lt});let dt;const ct=r(dt||(dt=(t=>t)`
	:host {
		background-color: var(--k-card-background-color, #fff);
		border-radius: var(--k-card-border-radius, 4px);
		display: inline-block;
		margin: 0 0.25em;
		max-width: 100%;
		padding: 1rem;
		transition: ease-in-out 0.3s all;
		width: auto;
	}
	:host([href]) {
		cursor: pointer;
	}
	:host([shadow]) {
		box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
		will-change: box-shadow;
	}
	:host([shadow]:hover),
	:host([shadow]:focus) {
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);
	}
	:host([type='category-item']) {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.5rem;
		text-align: center;
	}
	:host([type='category-product']) {
		align-items: end;
		display: flex;
		padding: 0 10px;
	}
	:host([type='category-product']) ::slotted(img) {
		transition: transform 0.3s ease-in-out;
		order: 2;
		width: 20%;
	}
	:host([type='category-product']:hover) ::slotted(img) {
		transform: scale3d(1.2, 1.2, 1);
	}
	:host([type='category-product']) ::slotted(h3) {
		font-size: 16px;
		font-weight: normal;
		order: 1;
		width: 80%;
	}
	:host([type='icon-item']) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 10px;
	}

	:host([type='icon-item']) ::slotted(h3) {
		margin: 10px 0;
		text-align: center;
		width: 100%;
	}

	:host([type='icon-item']) ::slotted(p) {
		margin: 0 0 20px 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:host([type='icon-item'][variant='outline']) ::slotted(k-icon) {
		border: solid 2px var(--primary-color1);
		border-radius: 50px;
		font-size: 40px;
		height: 90px;
		margin-top: -30px;
		width: 90px;
		align-items: center;
		text-align: center;
		display: flex;
		justify-content: center;
		background-color: #ffffff;
	}

	:host([type='icon-item'][variant='fill']) ::slotted(k-icon) {
		border: none;
		border-radius: 50px;
		color: var(--primary-color2, #959595);
		font-size: 40px;
		height: 90px;
		margin-top: -30px;
		width: 90px;
		align-items: center;
		text-align: center;
		display: flex;
		justify-content: center;
		background-color: var(--card-icon-background-fill, #f5f5f5);
	}

	:host([type='product-item']) {
		margin-top: 2rem;
		text-align: center;
	}

	:host([type='product-item']) ::slotted(img),
	:host([type='product-item']) ::slotted(k-img) {
		margin-top: -3rem;
		max-width: 100%;
		transition: 0.3s ease-in-out transform;
		width: auto;
		will-change: transform;
	}
	:host([type='product-item']:hover) ::slotted(img),
	:host([type='product-item']:hover) ::slotted(k-img) {
		transform: scale3d(1.1, 1.1, 1);
	}
	:host([type='product-item']) ::slotted(p) {
		text-align: initial;
	}
	::slotted(h1),
	::slotted(h2),
	::slotted(h3),
	::slotted(strong) {
		color: var(--primary-color2, #004691) !important;
	}
	::slotted(p) {
		color: var(--text-color1, #444444);
		display: none;
		font-size: var(--font-base, 14px);
		line-height: 1.572em;
	}
	:host([type='category-item']) ::slotted(k-icon) {
		font-size: var(--font-base, 24px);
		line-height: 1.572em;
		margin: 0;
	}
	:host([type='category-item']) ::slotted(p) {
		display: block;
		font-size: var(--font-base, 14px);
		line-height: 1.125em;
		margin: 0;
	}

	:host([type='full-image-width']) {
		padding: 0 0 1rem 0;
	}

	:host([type='full-image-width']) ::slotted(img) {
		border-top-left-radius: var(--k-card-border-radius, 4px);
		border-top-right-radius: var(--k-card-border-radius, 4px);
		width: 100%;
	}

	:host([type='full-image-width']) ::slotted(h3),
	:host([type='full-image-width']) ::slotted(p) {
		padding: 0 1rem;
	}

	:host([type='full-image-width']) ::slotted(k-link) {
		display: inline-flex;
		justify-content: center;
		width: 100%;
	}
	:host([type='full-image-width']) ::slotted(k-button) {
		display: flex;
		margin: 0 1rem;
		width: auto;
	}

	@media screen and (min-width: 768px) {
		::slotted(p) {
			display: block;
		}
		:host([type='category-product']) ::slotted(img) {
			width: 30%;
		}
		:host([type='category-product']) ::slotted(h3) {
			width: 70%;
		}
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		:host([type='category-product']) ::slotted(img) {
			width: 20%;
		}
		:host([type='category-product']) ::slotted(h3) {
			width: 80%;
		}
	}
`));class ht extends st{static get properties(){return{href:{type:String},loaded:{type:Boolean,reflect:!0},type:{type:String},target:{type:String},shadow:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0}}}static get styles(){return ct}constructor(){super(),this.href="",this.loaded=!1,this.target="_self",this.type="default",this.shadow=!0,this.variant="outline",this.addEventListener("click",this._handleClick)}render(){return this.loaded=!0,lt.defaultSlot}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}_handleClick(){if(""!==this.href)return window.open(this.href,this.target)}}var pt=Object.freeze({__proto__:null,Card:ht});let ut;const mt=r(ut||(ut=(t=>t)`:host {
    box-sizing: border-box;
    color: var(--k-icon-color, #E63027);
    display: inline-block;
    font-size: 1em;
}`));let vt,ft=t=>t;class gt extends st{static get properties(){return{icon:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}}}static get styles(){return mt}constructor(){super(),this.loaded=!1,this.target=""}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(`${t}-changed`))}render(){return this.loaded=!0,I(vt||(vt=ft`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css">
            <span class="${0}"></span>`),this.icon)}}var bt=Object.freeze({__proto__:null,Icon:gt});let yt;const xt=r(yt||(yt=(t=>t)`
li {
    color: var(--text-color1);
    line-height: 24px;
    list-style: none;
    padding: 0 10px 10px 10px;
}
li::before {
    content: "•";
    color: var(--primary-color1, #444);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}
@media only screen and (min-width: 768px) {
    li::before {
        margin-left: -1em;
    }
}`));let wt,kt=t=>t;class jt extends st{constructor(){super()}static get styles(){return xt}render(){return I(wt||(wt=kt`<li>
            <slot></slot>
        </li>`))}}var $t=Object.freeze({__proto__:null,ItemList:jt});let _t;const St=r(_t||(_t=(t=>t)`
:host {
    display: none;
}
:host([closed]),
:host([open]) {
    display: block;
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
:host([open]) .modal {
    animation: .3s forwards slideUp;
}
:host([closed]) .modal {
    animation: .3s forwards slideDown;
}
@keyframes slideDown {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100%);
    }
}
@keyframes slideUp {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
}
.overlay {
    animation-play-state: paused;
    background-color: var(--k-modal-shadow-background-color, rgba(0, 0, 0, 0.7));
    bottom: 0;
    left:0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
}
.modal {
    animation-play-state: paused;
    background-color: var(--k-modal-background-color, #FFF);
    border: 0;
    bottom: 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    left: 0;
    max-height: 90vh;
    max-width: 775px;
    overflow: hidden;
    position: fixed;
    width: 100%;
    will-change: transform;
    z-index: 10000;
}

.modal-body {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px;
}

:host([type='video']) .modal-body {
    padding: 0;
}
:host([type='video']) .modal,
:host([type='video']) .modal-header {
    --k-icon-color: #fff;
    background-color: transparent;
    border-bottom: 0;
    box-shadow: none;
}

:host([type='video']) .modal-header h4 {
    color: var(--k-modal-video-header-text-color, #FFF);
}

:host([type='video']) ::slotted(iframe) {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
}

.modal-body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255,255,255,0);
    opacity: 0
}

.modal-body::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(255,255,255,0);
    opacity: 0
}

.modal-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #444;
    transition: .3s
}

.modal-header {
    --k-icon-color: var(--primary-color2, #004691);
    align-items: center;
    background-color: var(--k-modal-header-background-color, #FFF);
    border-bottom: 2px solid var(--primary-color1, #E63027);
    box-sizing: border-box;
    display: flex;
    height: 52px;
    padding: 0 16px 0 24px;
}
.modal-header h4 {
    color: var(--text-color1, #444444);
    font-size: ${0};
    font-weight: normal;
    margin: 0;
}
.modal-header k-icon {
    cursor: pointer;
    font-size: 30px;
    font-weight: 600;
    height: 30px;
    margin-left: auto;
}
@media screen and (min-width: 768px) {
    .modal {
        bottom: initial;
        height: 434px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .modal-body {
        height: 382px;
        max-height: calc(90vh - 52px);
    }
    @keyframes slideDown {
        0% {
            transform: translate(-50%, -50%);
        }
        100% {
            transform: translate(-50%, 100%);
        }
    }
    @keyframes slideUp {
        0% {
            transform: translate(-50%, 100%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }
}`),n(lt.fontSize.h1),n(lt.fontSize.h2),n(lt.fontSize.h3),n(lt.fontSize.h4),n(lt.fontSize.h5),n(lt.fontSize.h2));let Ct,zt=t=>t;class At extends st{static get properties(){return{name:{type:String,reflect:!0},open:{type:Boolean,reflect:!0,attribute:"open"},closed:{type:Boolean,reflect:!0,attribute:"closed"}}}static get styles(){return St}constructor(){super(),this.closed=!1,this.open=!1,this.name="",this.addEventListener("open",this._handleOpen)}get isOpen(){return this.open}render(){return I(Ct||(Ct=zt`<div class="overlay" @click="${0}"></div>
        <div class="modal" aria-hidden="${0}" id="${0}">
            <div class="modal-header">
                <h4><slot name="header"></slot></h4>
                <k-icon icon="alk-icon-close" name="close" @click="${0}"></k-icon>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>`),this._handleClose,!this.open,this.name,this._handleClose)}_handleOpen(){this.open=!0,document.querySelector("body").style.setProperty("overflow","hidden")}_handleClose(){this.closed=!0,this.open=!1,document.querySelector("body").style.removeProperty("overflow"),setTimeout((()=>{this.removeAttribute("closed")}),300)}}var Et=Object.freeze({__proto__:null,Modal:At});function Mt(t){return(t=t.charAt(0).toUpperCase()+t.slice(1)).replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}function Ot({children:t,nodeType:e,outerHTML:o,tagName:i}){if(!t||!t.length||1!==e||!o)return;const s=o.includes("k-");i.toLowerCase().includes("k-")&&function(t){const e=t.toLowerCase(),o=e.replace("k-",""),i=Mt(o);Ut.includes(o)&&(Pt[e]||(Pt[e]=!0,function(t){switch(t){case"./components/acordeon/index.js":return import("./webcomponents-2.2.1-DRuyRUGY.js");case"./components/banner/index.js":return import("./webcomponents-2.2.1-BCH1T_ta.js");case"./components/banner-video/index.js":return import("./webcomponents-2.2.1-CvAksACp.js");case"./components/blog-article/index.js":return import("./webcomponents-2.2.1-2UwmVnT5.js");case"./components/button/index.js":return import("./webcomponents-2.2.1-B7_-oTA9.js");case"./components/card/index.js":return Promise.resolve().then((function(){return pt}));case"./components/common/index.js":return Promise.resolve().then((function(){return at}));case"./components/gallery/index.js":return import("./webcomponents-2.2.1-BWKGV3ro.js");case"./components/grid/index.js":return import("./webcomponents-2.2.1-BMa9UjM7.js");case"./components/icon/index.js":return Promise.resolve().then((function(){return bt}));case"./components/li/index.js":return Promise.resolve().then((function(){return $t}));case"./components/link/index.js":return import("./webcomponents-2.2.1-ML6dfrN-.js");case"./components/list/index.js":return import("./webcomponents-2.2.1-CyXykA0i.js");case"./components/modal/index.js":return Promise.resolve().then((function(){return Et}));case"./components/slider/index.js":return import("./webcomponents-2.2.1-TP3qsXFY.js");case"./components/title-underline/index.js":return import("./webcomponents-2.2.1-Bqd90btM.js");default:return new Promise((function(e,o){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./components/${o}/index.js`).then((t=>{window.customElements.define(e,t[i])}))))}(i),s&&Array.from(t).forEach((t=>Ot(t)))}window.customElements.define("k-card",ht),window.customElements.define("k-icon",gt),window.customElements.define("k-li",jt),window.customElements.define("k-modal",At);const Ut=["acordeon","banner","banner-video","blog-article","button","gallery","grid","link","list","slider","title-underline"],Pt={"k-card":!0,"k-icon":!0,"k-li":!0,"k-modal":!0},Tt=new MutationObserver((t=>{t.forEach((({addedNodes:t,type:e})=>{"childList"===e&&t.forEach((t=>Ot(t)))}))})),Nt=new IntersectionObserver(((t,e)=>{t.forEach((({isIntersecting:t,target:o})=>{if(t){const t=o.tagName.toLowerCase(),i=t.replace("k-",""),s=Mt(i);e.unobserve(o),Pt[t]||(Pt[t]=!0,function(t){switch(t){case"./components/acordeon/index.js":return import("./webcomponents-2.2.1-DRuyRUGY.js");case"./components/banner/index.js":return import("./webcomponents-2.2.1-BCH1T_ta.js");case"./components/banner-video/index.js":return import("./webcomponents-2.2.1-CvAksACp.js");case"./components/blog-article/index.js":return import("./webcomponents-2.2.1-2UwmVnT5.js");case"./components/button/index.js":return import("./webcomponents-2.2.1-B7_-oTA9.js");case"./components/card/index.js":return Promise.resolve().then((function(){return pt}));case"./components/common/index.js":return Promise.resolve().then((function(){return at}));case"./components/gallery/index.js":return import("./webcomponents-2.2.1-BWKGV3ro.js");case"./components/grid/index.js":return import("./webcomponents-2.2.1-BMa9UjM7.js");case"./components/icon/index.js":return Promise.resolve().then((function(){return bt}));case"./components/li/index.js":return Promise.resolve().then((function(){return $t}));case"./components/link/index.js":return import("./webcomponents-2.2.1-ML6dfrN-.js");case"./components/list/index.js":return import("./webcomponents-2.2.1-CyXykA0i.js");case"./components/modal/index.js":return Promise.resolve().then((function(){return Et}));case"./components/slider/index.js":return import("./webcomponents-2.2.1-TP3qsXFY.js");case"./components/title-underline/index.js":return import("./webcomponents-2.2.1-Bqd90btM.js");default:return new Promise((function(e,o){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./components/${i}/index.js`).then((e=>{window.customElements.define(t,e[s])})))}}))}),{rootMargin:"0px 0px 250px 0px"});Ut.forEach((t=>{const e=`k-${t}`,o=Array.from(document.querySelectorAll(e));o.length&&o.forEach((t=>Nt.observe(t)))})),Tt.observe(document.body,{childList:!0,subtree:!0});export{lt as c,r as i,n as r,st as s,I as x};
