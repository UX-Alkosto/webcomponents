/*! webcomponents release: 2.2.1 */
import{Slider as e}from"./webcomponents-2.2.1-TP3qsXFY.js";import{i as t}from"./webcomponents-2.2.1-D1zuXL5S.js";let i;const s=t(i||(i=(e=>e)`
.k-slider__slide,
.k-gallery__slide {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    align-items: stretch;
    display: flex;
    filter: grayscale(100%);
    flex-shrink: 0;
    height: auto;
    justify-content: center;
    opacity:0.6;
    user-select: none;
    white-space: normal;
    width: 100%;
}
.k-slider__slide img,
.k-gallery__slide img {
    max-width: 100%;
    object-fit: cover;
}
.k-slider__slide k-card,
.k-gallery__slide k-card {
    max-height: 100%;
    width: 100%;
}`));let l;const r=t(l||(l=(e=>e)`
.glide__slide--active,
.k-slider__slide--active,
.k-gallery__slide--active {
    filter: grayscale(0%);
    opacity: 1;
    transition: 0.5s ease;
}`));class a extends e{static get styles(){return[super.styles,s,r]}constructor(){super()}}export{a as Gallery};
