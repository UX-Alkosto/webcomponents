import { css } from 'lit';

export const Theme = css`
.k-slider__slide--active,
.k-gallery__slide--active {
    filter: grayscale(0%);
    opacity: 1;
    transition: 0.5s ease;
}`;