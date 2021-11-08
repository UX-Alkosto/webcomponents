import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host {
    background-color: var(--k-banner-background-color, #FFF);
    color: var(--text-color1, #444444);
    display: flex;
    flex-wrap: wrap;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.base)});
    justify-content: center;
    margin-bottom: 2rem;
    overflow: hidden;
}
:host([type=full]) .container {
    flex-wrap: wrap;
}
:host([type=full]) .content {
    text-align: center;
    align-items: stretch;
}
:host([type=left]),
:host([type=right]) {
    background-color: var(--k-banner-background-color, #F5F5F5);
}
:host([type=left-cut]) .container,
:host([type=right-cut]) .container {
    background-color: var(--k-banner-background-color, #F5F5F5);
}
:host([type=left]) .content,
:host([type=right]) .content {
    align-items: flex-start;
}
::slotted(h1),
::slotted(h2),
::slotted(h3) {
    color: var(--primary-color2, #004691) !important;
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
::slotted(p) {
    color: var(--text-color1, #444444);
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    line-height: 1.572em;
}
::slotted(k-button) {
    width:100%;
}
.container {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    max-width: ${unsafeCSS(`${common.defaultMaxWidth}px`)};
}
section,
.content {
    align-items: center;
    display: flex;
}
.content {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    order: 2;
}
section picture {
    display: flex;
    overflow: hidden;
    width: 100%;
}
.full{
    flex-basis: 100%;
}
.left,
.left-cut,
.right,
.right-cut {
    flex-basis: 100%;
}
.full img,
.left img,
.left-cut img,
.right img,
.right-cut img {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}
@media screen and (min-width: 420px) {
    ::slotted(k-button) {
        width:auto;
    }
}
@media screen and (min-width: 768px) {
    :host([type=full]) .content{
        align-items: center;
        flex-basis: 100%;
    }
    .container {
        flex-direction: row;
        justify-content: space-between;
    }
    .content {
        align-items: flex-start;
        order: unset;
        padding: 0 2rem;
    }
    .left,
    .right{
        flex-basis: 50%;
    }
    .left-cut,
    .right-cut {
        align-items: stretch;
        flex-basis: 40%;
    }
    .left-cut {
        margin-left: 0;
        filter: drop-shadow(10px 0 0 var(--primary-color2, #004691));
    }
    .left-cut img {
        clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    }
    .right-cut {
        margin-right: 0;
        filter: drop-shadow(-10px 0 0 var(--primary-color2, #004691));
    }
    .right-cut img {
        clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
    }
}`;

export { styles };