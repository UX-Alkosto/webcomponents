import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host{
    border-bottom: 1px solid var(--k-title-underline-border-color, #E0E0E0);
    display: flex;
    font-family: var(--font-family, 'Arial');
    margin: 0 0 1rem;
    max-width: 100%;
    padding: 0;
    transition: ease-in-out .3s all;
    width: auto;
}

:host([type=center]) {
    justify-content: center;
}
:host([type=left]) {
    justify-content: flex-start;
}
:host([type=right]) {
    justify-content: flex-end;
}
::slotted(h1),
::slotted(h2),
::slotted(h3),
::slotted(h4),
::slotted(h5),
::slotted(h6) {
    box-shadow: inset 0 -1px 0 0px var(--primary-color1, #E63027), 0px 2px 0 0px var(--primary-color1, #E63027);
    color: var(--primary-color2, #004691) !important;
    display: inline-block;
    margin: 0 !important;
    padding: .5em 0;
    position: relative;
}
::slotted(h1) {
    font-size: ${unsafeCSS(common.fontSize.h1)};
}
::slotted(h2) {
    font-size: ${unsafeCSS(common.fontSize.h2)};
}
::slotted(h3) {
    font-size: ${unsafeCSS(common.fontSize.h3)};
}
::slotted(h4) {
    font-size: ${unsafeCSS(common.fontSize.h4)};
}
::slotted(h5) {
    font-size: ${unsafeCSS(common.fontSize.h5)};
}
::slotted(h6) {
    font-size: ${unsafeCSS(common.fontSize.h6)};
}
::slotted(p) {
    font-size: ${unsafeCSS(common.fontSize.p)};
}`;

export { styles };