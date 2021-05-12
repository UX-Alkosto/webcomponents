import { css } from 'lit';

const styles = css`:host{
    border-bottom: 1px solid var(--k-title-underline-border-color, #E0E0E0);
    display: flex;
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
::slotted(h3) {
    color: var(--primary-color2, #004691);
    display: inline-block;
    margin: 0;
    padding: .5em 0;
    position: relative;
}
::slotted(h1):after,
::slotted(h2):after,
::slotted(h3):after {
    border-bottom: 3px solid var(--primary-color1, #E63027);;
    bottom: -2px;
    content: '';
    left: 0;
    position: absolute;
    width: 100%;
}`;

export { styles };