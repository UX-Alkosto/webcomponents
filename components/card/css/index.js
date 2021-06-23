import { css } from 'lit';

const styles = css`:host{
    background-color: var(--k-card-background-color, #fff);
    border-radius: var(--k-card-border-radius, 4px);
    display: inline-block;
    margin: .5em;
    max-width: 100%;
    padding: 1rem;
    transition: ease-in-out .3s all;
    width: auto;
}
:host([href]) {
    cursor: pointer;
}
:host([shadow]) {
    box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
}
:host([shadow]:hover),
:host([shadow]:focus){
    box-shadow: 0 2px 5px 2px rgba(0,0,0,.2);
}
:host([type=category-item]) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .5rem;
    text-align: center;
}
:host([type=icon-item]){
    margin-top: 4rem;
}

:host([type=icon-item]) ::slotted(k-icon){
    border: solid 1px var(--primary-color1);
    border-radius: 50px;
    font-size: 40px;
    height: 90px;
    margin-top: -30px;
    width: 90px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
}
:host([type=product-item]) {
    margin-top: 2rem;
    text-align: center;
}

:host([type=product-item]) ::slotted(img),
:host([type=product-item]) ::slotted(k-img) {
    margin-top: -3rem;
    max-width: 100%;
    width: auto;
    will-change: transform;
    transition: .3s ease-in-out transform;
}
:host([type=product-item]:hover) ::slotted(img),
:host([type=product-item]:hover) ::slotted(k-img){
    transform: scale3d(1.05, 1.05, 1);
}
:host([type=product-item]) ::slotted(p) {
    text-align: initial;
}
::slotted(h1),
::slotted(h2),
::slotted(h3),
::slotted(strong) {
    color: var(--primary-color2, #004691) !important;
}
::slotted(p) {
    color: var(--text-color1, #444444);
    display: none;
    font-size: var(--font-base, 14px);
    line-height: 1.572em;
}
:host([type=category-item]) ::slotted(k-icon) {
    font-size: var(--font-base, 24px);
    line-height: 1.572em;
    margin: 0;
}
:host([type=category-item]) ::slotted(p) {
    display: block;
    font-size: var(--font-base, 14px);
    line-height: 1.125em;
    margin: 0;
}
@media screen and (min-width: 768px) {
    ::slotted(p) {
        display: block;
    }
}`;

export { styles };