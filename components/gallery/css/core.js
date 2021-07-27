import { css } from 'lit';
export const Core = css`
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
}`;