import { css } from 'lit';

export const Theme = css`
.glide__arrow {
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
.glide__arrow k-icon {
    font-size: 20px;
}
.glide__arrow:focus {
    outline: none;
}
.glide__arrow:hover {
    border-color: white;
}
.glide__arrow--left {
    left: 1em;
}
.glide__arrow--right {
    right: 1em;
}
.glide__arrow--disabled {
    opacity: 0.33;
}

.glide__bullets {
    position: absolute;
    z-index: 2;
    bottom: -2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
}

.glide__bullet {
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
.glide__bullet:focus {
    outline: none;
}
.glide__bullet:hover, .glide__bullet:focus {
    background-color: var(--k-slider-bullet-color-hover, #004691);
}
.glide__bullet--active {
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
`;