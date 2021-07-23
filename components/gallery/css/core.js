import { css } from 'lit';
export const Core = css`
.k-gallery {
    box-sizing: border-box;
    position: relative;
    width: 100%;
}
.k-gallery * {
    box-sizing: inherit;
}
.k-gallery__track {
    overflow: hidden;
}
.k-gallery__slides {
    align-items: stretch;
    backface-visibility: hidden;
    background-color: var(--k-gallery-background-color, #fff);
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
.k-gallery__slides--dragging {
    user-select: none;
}
.k-gallery__slide {
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
    filter: grayscale(100%);
    opacity:0.6;
}



.k-gallery__slide img{
    max-width: 100%;
    max-width: 100%;
    object-fit: cover;
}
.k-gallery__slide k-card {
    max-height: 100%;
    width: 100%;
}
.k-gallery__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.k-gallery__arrows {
    -webkit-touch-callout: none;
    user-select: none;
}
.k-gallery__bullets {
    -webkit-touch-callout: none;
    user-select: none;
}
.k-gallery--rtl {
    direction: rtl;
}`;