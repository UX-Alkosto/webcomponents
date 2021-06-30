import{css, unsafeCSS} from'lit'
import { common } from '../../common';
const styles= css`


h3 {
    color: var(--primary-color2, #004691) !important;
    font-size: 18px;
}

details {
    width: 100%;
    min-height: 5px;
    padding: 25px 15px 25px 45px;
    margin: 0 auto 20px auto;
    position: relative;
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 15px;
    box-sizing: border-box;
    transition: all .3s;
}


details[open] {
    min-height: 50px;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
}

::slotted(ul) {
    color: var(--text-color1, #444444);
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    margin-left: 10px;
    padding: 0px;
}

::slotted(p) {
    color: var(--text-color1, #444444);
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    line-height: 1.572em;
}

::slotted(li:before) {
    content: "•";
    color: var(--primary-color1);
    margin-right: 10px;
    font-size: 20px;
}

::slotted(a){
    color: var(--link-text-color, #444444) !important;
    text-decoration: underline;
}

summary {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

// summary .tit_pregunta {
//     color: var(--main-azul);
//     font-weight: bold !important;
//     text-align: left;
//     font-size: 18px;
//     width: 90%;
//     margin-top: 10px;
//     margin-bottom: 10px;
// }

// details p,
// details ul {
//     color: #444444;
//     font-weight: 300;
//     font-size: 14px;
//     line-height: 24px;
//     padding: 0px;
// }



summary:focus {
    outline: none !important;
}

summary::-webkit-details-marker {
    display: none
}

.control-icon {
    fill: var(--main-naranja);
    transition: .3s ease;
    pointer-events: none;
    position: absolute;
    top: 38px;
    right: 10px;
}

.control-icon-close {
    display: none;
}

:host([open]) .control-icon-close {
    display: initial;
    transition: .3s ease;
}

:host([open]) .control-icon-expand {
    display: none;
}

:host([open]) summary:hover::after {
    animation: pulse 1s ease;
}

:host([open]) .tit_pregunta {
    margin-bottom: 20px !important;
}

@keyframes pulse {
    25% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1);
    }

    75% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.fade-in-top {
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in-top {
    0% {
        -webkit-transform: translateY(-50px);
        transform: translateY(-50px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fade-in-top {
    0% {
        -webkit-transform: translateY(-50px);
        transform: translateY(-50px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}

@media only screen and (max-width: 414px) {
    details {
        padding: 15px 15px 15px 15px;
    }

    details p,
    details ul {
        padding-right: 10px;
    }

    details p {
        margin-top: 0px;

    }

    .control-icon {
        top: 25px;
        right: 5px;
    }

    :host([open]) .tit_pregunta {
        margin-bottom: 10px !important;
    }
}

@media only screen and (max-width: 375px) {
    details ul {
        margin: 0px;
    }
}` 
export {styles}