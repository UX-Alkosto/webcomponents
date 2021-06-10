import { css } from 'lit';

export const Theme = css`
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
    font-size: 30px;
}
.k-slider__arrow:focus {
    outline: none;
}
.k-slider__arrow:hover {
    border-color: white;
}
.k-slider__arrow--left {
    left: 1em;
}
.k-slider__arrow--right {
    right: 1em;
}
.k-slider__arrow--disabled {
    opacity: 0.33;
}

.k-slider__bullets {
    position: absolute;
    z-index: 2;
    bottom: -2em;
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
.k-slider__bullet--active {
    background-color: var(--carousel-nav-color, #004691);
}

.k-slider--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.k-slider--dragging {
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