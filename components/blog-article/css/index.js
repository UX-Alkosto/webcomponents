import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host{
    background-color: var(--k-card-background-color, #fff);
    border-radius: var(--k-card-border-radius, 4px);
    display: inline-flex;
    flex-direction: column;
    margin: .5em;
    max-width: 100%;
    padding: 0;
    position:relative;
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
::slotted(k-button){
    border: 4px solid white;
    min-width: 180px;
    position: absolute;
    right: 2em;
    top: 164px;
    z-index: 1;
}
::slotted(img){
    border-radius: var(--button-radius,4px) var(--button-radius,4px) 0 0;
    height: 191px;
    object-fit:cover;
    width:100%;
}
.text{
    padding: .5em 1.75em 1.75em 1.75em;
}

::slotted(span){
    color: var(--primary-color1,#F9C332);
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    font-weight: bold;
    line-height: 1.572em;
}
::slotted(h2){
    color: var(--text-color1,#010000);
    font-size: ${unsafeCSS(common.fontSize.h2)};
    font-weight: bold;
    line-height: 1.3em;
    max-width: 380px;
}

::slotted(p){
    color: var(--text-color1, #444444);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    line-height: 1.572em;
}
::slotted(.author_date){
    color: var(--text-color3, #959595);
    font-size: 0.857em;
    font-weight: medium;
    line-height: 1.572em;
    margin-bottom: 0;
    text-align: right;
}

@media screen and (min-width: 768px) {
    ::slotted(p) {
        display: block;
    }
}`;

export { styles };