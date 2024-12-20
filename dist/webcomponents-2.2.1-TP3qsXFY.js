/*! webcomponents release: 2.2.1 */
import{i as e,s,c as t,x as r}from"./webcomponents-2.2.1-D1zuXL5S.js";let i;const l=e(i||(i=(e=>e)`
.k-slider {
    box-sizing: border-box;
    position: relative;
    width: 100%;
}
.k-slider * {
    box-sizing: inherit;
}
.k-slider__track {
    overflow: hidden;
}
.k-slider__slides {
    align-items: stretch;
    backface-visibility: hidden;
    background-color: var(--k-slider-background-color, #fff);
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    overflow: hidden;
    padding: .5em 0;
    position: relative;
    touch-action: pan-Y;
    transform-style: preserve-3d;
    width: 100%;
    will-change: transform;
    white-space: nowrap;
}
.k-slider__slides--dragging {
    user-select: none;
}
.k-slider__slide {
    align-items: stretch;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
}
.k-slider__slide img{
    max-width: 100%;
}
.k-slider__slide k-card {
    max-height: 100%;
    width: 100%;
}
.k-slider__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.k-slider__arrows {
    -webkit-touch-callout: none;
    user-select: none;
}
.k-slider__bullets {
    -webkit-touch-callout: none;
    user-select: none;
}
.k-slider--rtl {
    direction: rtl;
}`));let o;const a=e(o||(o=(e=>e)`
.k-slider__arrow {
    align-items: center;
    background-color: white;
    border-radius: 48px;
    border: none;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    line-height: 1;
    opacity: 1;
    padding: 12px;
    position: absolute;
    top: 50%;
    transition: opacity 150ms ease, border 300ms ease-in-out;
    transform: translateY(-50%);
    width: 48px;
    z-index: 2;
}
.k-slider__arrow k-icon {
    font-size: 20px;
}
.k-slider__arrow:focus {
    outline: none;
}
.k-slider__arrow:hover {
    border-color: white;
}
.k-slider__arrow--left {
    left: .4em;
}
.k-slider__arrow--right {
    right: .4em;
}
.k-slider__arrow--disabled {
    opacity: 0.33;
}

.k-slider__bullets {
    position: absolute;
    z-index: 2;
    bottom: -1.5em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
}

.k-slider__bullet {
    background-color: var(--k-slider-bullet-color,#F5F5F5);
    width: 12px;
    height: 12px;
    padding: 0;
    border-radius: 50%;
    border: 0;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    line-height: 0;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    margin: 0 0.5em;
}
.k-slider__bullet:focus {
    outline: none;
}
.k-slider__bullet:hover, .k-slider__bullet:focus {
    background-color: var(--k-slider-bullet-color-hover, #004691);
}
.glide__bullet--active,
.k-slider__bullet--active {
    background-color: var(--carousel-nav-color, #004691);
}

.glide--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.glide--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}
:where(:host([arrows=false]) .k-slider__arrow),
:host([mobile-arrows=false]) .k-slider__arrow {
    display:none;
}
:where(:host([bullets=false]) .k-slider__bullets),
:host([mobile-bullets=false]) .k-slider__bullets{
    display:none;
}
@media screen and (min-width: 768px) {
    :where(:host([arrows=false]) .k-slider__arrow),
    :host([desktop-arrows=false]) .k-slider__arrow {
        display:none;
    }
    :where(:host([bullets=false]) .k-slider__bullets),
    :host([desktop-bullets=false]) .k-slider__bullets {
        display:none;
    }
    :where(:host([arrows=true]) .k-slider__arrow),
    :host([desktop-arrows=true]) .k-slider__arrow {
        display:block;
    }
    :where(:host([bullets=true]) .k-slider__bullets),
    :host([desktop-bullets=true]) .k-slider__bullets {
        display:block;
    }
}
`));let d;const n=e(d||(d=(e=>e)`:host {
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;
    justify-content: center;
    margin: 0 auto 2rem;
    padding: 0;
}
:host([bullets=true]){
    padding-bottom: 2em;
}
`));let h,c,u,k,b,_=e=>e;class p extends s{static get properties(){return{arrows:{type:Boolean},bullets:{type:Boolean},"desktop-arrows":{type:Boolean},"desktop-bullets":{type:Boolean},"desktop-items":{type:Number},"items-space":{type:Number},loaded:{type:Boolean,reflect:!0},"mobile-arrows":{type:Boolean},"mobile-bullets":{type:Boolean},"mobile-items":{type:Number},peek:{type:Number},width:{type:Number}}}static get styles(){return[n,l,a]}constructor(){super(),this.arrows=!1,this.bullets=!1,this.countSlides=this.childElementCount,this["desktop-arrows"]=!1,this["desktop-bullets"]=!1,this["desktop-items"]=6,this["items-space"]=16,this.loaded=!1,this["mobile-arrows"]=!1,this["mobile-bullets"]=!1,this["mobile-items"]=2,this.peek=0,this.width=t.defaultMaxWidth}attributeChangedCallback(e,s,t){super.attributeChangedCallback(e,s,t),this.dispatchEvent(new Event(`${e}-changed`)),"desktop-items"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"mobile-items"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}firstUpdated(){this.arrows=w(this.getAttribute("arrows")),this["desktop-arrows"]=!!w(this.getAttribute("desktop-arrows"))||this.arrows,this["desktop-bullets"]=!!w(this.getAttribute("desktop-bullets"))||this.bullets,this["mobile-arrows"]=!!w(this.getAttribute("mobile-arrows"))||this.arrows,this["mobile-bullets"]=!!w(this.getAttribute("mobile-bullets"))||this.bullets,this._initSlider()}render(){return r(h||(h=_`${0}
        <div class="k-slider">
            <div data-glide-el="track" class="k-slider__track">
                <slot class="k-slider__slides"></slot>
            </div>
            ${0}
            ${0}
        </div>`),this._dynamicStyles(),this["desktop-arrows"]||this["mobile-arrows"]?this._getArrows():"",this["desktop-bullets"]||this["mobile-bullets"]?this._getDots():"")}_dynamicStyles(){const e=`${0===this.width||null===this.width||void 0===this.width?1204:this.width}`;return r(c||(c=_`<style>
            :host {
                max-width: ${0}px;
            }
        </style>`),e)}_getArrows(){return r(u||(u=_`<div class="k-slider__arrows" data-glide-el="controls">
            <button class="k-slider__arrow k-slider__arrow--left" data-glide-dir="<"><k-icon icon="alk-icon-izquierda"></k-icon></button>
            <button class="k-slider__arrow k-slider__arrow--right" data-glide-dir=">"><k-icon icon="alk-icon-derecha"></k-icon></button>
        </div>`))}_getDots(){const e=[];for(let s=0;s<this.countSlides;s++)e.push(r(k||(k=_`<button class="k-slider__bullet" data-glide-dir="=${0}"></button>`),s));return r(b||(b=_`<div class="k-slider__bullets" data-glide-el="controls[nav]">
            ${0}
        </div>`),e)}async _initSlider(){const e=await import("./webcomponents-2.2.1-MXW-B-yT.js").then((e=>e.default));let s=this.innerHTML;return this.shadowRoot.querySelector(".k-slider__slides").innerHTML=s,this.innerHTML="",this.loaded=!0,new e(this.shadowRoot.querySelector(".k-slider"),{classes:{direction:{ltr:"k-slider--ltr",rtl:"k-slider--rtl"},slider:"k-slider--slider",carousel:"k-slider--carousel",swipeable:"k-slider--swipeable",dragging:"k-slider--dragging",cloneSlide:"k-slider__slide--clone",activeNav:"k-slider__bullet--active",activeSlide:"k-slider__slide--active",disabledArrow:"k-slider__arrow--disabled"},gap:this["items-space"],type:"carousel",peek:this.peek,perView:this["desktop-items"],breakpoints:{768:{perView:this["mobile-items"],peek:0},359:{perView:1,peek:0}}}).mount()}}function w(e=""){return"string"==typeof e&&("true"===e.toLowerCase()&&!0)}export{p as Slider};
