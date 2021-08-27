import{css, unsafeCSS} from'lit';
import { common } from '../../common';
const styles= css`


h3 {
    color: var(--primary-color2, #004691) !important;
    font-size: 18px;
    margin: 0;
}

details {
    width: 100%;
    min-height: 5px;
    padding: 25px 15px 25px 45px;
    margin: 0 auto 20px auto;
    position: relative;
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 10px;
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
    margin-left: 20px;
    padding: 0px;
}

::slotted(p) {
    color: var(--text-color1, #444444);
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    line-height: 1.572em;
}


::slotted(a){
    color: var(--link-text-color, #444444) !important;
    text-decoration: underline;
}

summary {
    align-items: center;
    cursor: pointer;
    display: flex !important;
    position: relative; 
}

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

.collapse {
    display: none;
}

details[open] .collapse {
    display: initial;
    transition: .3s ease;
}

details[open] .expand {
    display: none;
}

details[open] summary:hover::after {
    animation: pulse 1s ease;
}

k-icon {
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    right:0;
    top:0;
}

details .linea {
    background-color: #E0E0E0;
    border: none;
    height: 1px;
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
    h3 {
        font-size: 14px;
    }
    details {
        padding: 15px 15px 15px 15px;
        width: 90%;
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
}`; 
export {styles};