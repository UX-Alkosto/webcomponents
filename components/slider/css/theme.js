import { css } from 'lit';

export const Theme = css`
.k-slider__arrow {
    position: absolute;
    display: block;
    top: 50%;
    z-index: 2;
    color: white;
    text-transform: uppercase;
    padding: 9px 12px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
    opacity: 1;
    cursor: pointer;
    transition: opacity 150ms ease, border 300ms ease-in-out;
    transform: translateY(-50%);
    line-height: 1;
}
.k-slider__arrow:focus {
    outline: none;
}
.k-slider__arrow:hover {
    border-color: white;
}
.k-slider__arrow--left {
    left: 2em;
}
.k-slider__arrow--right {
    right: 2em;
}
.k-slider__arrow--disabled {
    opacity: 0.33;
}

.k-slider__bullets {
    position: absolute;
    z-index: 2;
    bottom: 2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
}

.k-slider__bullet {
    background-color: rgba(255, 255, 255, 0.5);
    width: 9px;
    height: 9px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    line-height: 0;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    margin: 0 0.25em;
}
.k-slider__bullet:focus {
    outline: none;
}
.k-slider__bullet:hover, .k-slider__bullet:focus {
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.5);
}
.k-slider__bullet--active {
    background-color: white;
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
}`;