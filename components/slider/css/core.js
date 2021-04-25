import { css } from 'lit-element';
export const Core = css`
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
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    overflow: hidden;
    padding: 1rem 0;
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
    align-items: center;
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
    height: -webkit-fill-available;
    width: -webkit-fill-available;
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
}`;