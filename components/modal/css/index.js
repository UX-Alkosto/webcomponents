import { css, unsafeCSS} from'lit';
import { common } from '../../common';
const styles= css`
:host {
    display: none;
}
:host([open]) {
    display: block;
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
.overlay {
    background-color: var(--k-modal-shadow-background-color, rgba(0, 0, 0, 0.7));
    bottom: 0;
    left:0;
    position: fixed;
    right: 0;
    top: 0;
    transition: ease-in-out 0.3s all;
    z-index: 9999;
}
.modal {
    background-color: var(--k-modal-background-color, #FFF);
    bottom: 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    left: 0;
    max-height: 90vh;
    max-width: 775px;
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 10000;
}

.modal-body {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px;
}

.modal-body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255,255,255,0);
    opacity: 0
}

.modal-body::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(255,255,255,0);
    opacity: 0
}

.modal-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #444;
    transition: .3s
}

.modal-header {
    --k-icon-color: var(--primary-color2, #004691);
    align-items: center;
    background-color: var(--k-modal-header-background-color, #FFF);
    border-bottom: 2px solid var(--primary-color1, #E63027);
    box-sizing: border-box;
    display: flex;
    height: 52px;
    padding: 0 16px 0 24px;
}
.modal-header h4 {
    color: var(--text-color1, #444444);
    font-size: ${unsafeCSS(common.fontSize.h2)};
    font-weight: normal;
    margin: 0;
}
.modal-header k-icon {
    cursor: pointer;
    font-size: 30px;
    font-weight: 600;
    height: 30px;
    margin-left: auto;
}
@media screen and (min-width: 768px) {
    .modal {
        bottom: initial;
        height: 434px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .modal-body {
        height: 382px;
        max-height: calc(90vh - 52px);
    }
}`;
export {styles};