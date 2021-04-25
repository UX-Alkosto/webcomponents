import { css } from 'lit-element';
export const Core = css`
.k-slider {
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.k-slider * {
    box-sizing: inherit;
}
.k-slider__track {
    overflow: hidden;
}
.k-slider__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
    align-items: center;
}
.k-slider__slides--dragging {
    user-select: none;
}
.k-slider__slide {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
}
.k-slider__slide img{
    max-width: 100%;
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