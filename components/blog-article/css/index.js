import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host{
    background-color: var(--k-card-background-color, #fff);
    border-radius: var(--button-radius,28px);
    display: inline-flex;
    flex-direction: column;
    margin: 2em 0.5em 0.5em;
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
    border: 3px solid rgb(255, 255, 255);
    border-radius: var(--button-radius,28px);
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    min-height: inherit;
    min-width: 170px;
    padding: 0.75em !important;
    position: absolute;
    right: 1em;
    top: 125px;   
    z-index: 1;
}
::slotted(img){
    border-radius: var(--button-radius,28px) var(--button-radius,28px) 0 0;
    height: 150px !important;
    margin-bottom: 10px;
    object-fit: cover;
    width: 100%;   
}
.text{
    padding: .5em 1.75em 1.75em 1.75em;
}

::slotted(span){
    color: var(--primary-color1,#F9C332);
    font-size: var(--font-base, 12px);
    font-weight: bold;
    line-height: 1.572em;
}
::slotted(h2){
    color: var(--text-color1,#010000);
    font-size: 20px !important;
    font-weight: bold;
    line-height: 1.3em;
    margin: 15px 0px !important;
    max-width: 380px;   
}

::slotted(p){
    color: var(--text-color1, #444444);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: var(--font-base, 13px);
    line-height: 18px;
    margin-bottom: 10px !important;
}
::slotted(.author_date){
    color: var(--text-color3, #959595);
    font-size: 12px;
    font-weight: medium;
    line-height: 1.572em;
    margin-bottom: 0 !important;
    text-align: right;
}

@media screen and (min-width: 768px) {
    ::slotted(p) {
        display: block;
    }
}`;

export { styles };