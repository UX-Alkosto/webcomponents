import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host {
    align-items: center;
    background-color: var(--button-primary-background-color, #E63027);
    border: var(--button-primary-border, 1px solid #E63027);
    border-radius: var(--button-radius, 4px);
    box-sizing: border-box;
    color: var(--button-primary-text-color, #ffffff);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.base)});
    font-weight: normal;
    justify-content: center;
    line-height: 1.125rem;
    min-height: 56px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: ease-in-out .3s all;
    width: auto;
}
:host([variant=outline]) {
    background-color: var(--button-outline-background-color, transparent);
    border: var(--button-outline-border,1px solid #E63027);
    color: var(--button-outline-text-color, #E63027);
}
:host(:focus),
:host(:hover),
:host([variant=outline]:focus),
:host([variant=outline]:hover) {
    background-color: var(--button-primary-background-color-hover, #AB1114);
    border-color: var(--button-primary-background-color-hover, #AB1114);
}
:host([variant=outline]:focus),
:host([variant=outline]:hover) {
    color: var(--button-primary-text-color-hover, #ffffff);
}`;

export { styles };