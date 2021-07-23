import { css } from 'lit';

export const Theme = css`
.k-gallery__slide--active {
    filter: grayscale(0%);
    opacity: 1;
    transition: 0.5s ease;
}
.k-gallery__arrow {
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
.k-gallery__arrow k-icon {
    font-size: 20px;
}
.k-gallery__arrow:focus {
    outline: none;
}
.k-gallery__arrow:hover {
    border-color: white;
}
.k-gallery__arrow--left {
    left: 1em;
}
.k-gallery__arrow--right {
    right: 1em;
}
.k-gallery__arrow--disabled {
    opacity: 0.33;
}

.k-gallery__bullets {
    position: absolute;
    z-index: 2;
    bottom: -2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
}

.k-gallery__bullet {
    background-color: var(--k-gallery-bullet-color,#F5F5F5);
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
.k-gallery__bullet:focus {
    outline: none;
}
.k-gallery__bullet:hover, .k-gallery__bullet:focus {
    background-color: var(--k-gallery-bullet-color-hover, #004691);
}
.k-gallery__bullet--active {
    background-color: var(--carousel-nav-color, #004691);
}

.k-gallery--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.k-gallery--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

:where(:host([arrows=false]) .k-gallery__arrow),
:host([mobile-arrows=false]) .k-gallery__arrow {
    display:none;
}
:where(:host([bullets=false]) .k-gallery__bullets),
:host([mobile-bullets=false]) .k-gallery__bullets{
    display:none;
}
@media screen and (min-width: 768px) {
    :where(:host([arrows=false]) .k-gallery__arrow),
    :host([desktop-arrows=false]) .k-gallery__arrow {
        display:none;
    }
    :where(:host([bullets=false]) .k-gallery__bullets),
    :host([desktop-bullets=false]) .k-gallery__bullets {
        display:none;
    }
    :where(:host([arrows=true]) .k-gallery__arrow),
    :host([desktop-arrows=true]) .k-gallery__arrow {
        display:block;
    }
    :where(:host([bullets=true]) .k-gallery__bullets),
    :host([desktop-bullets=true]) .k-gallery__bullets {
        display:block;
    }
}
`;