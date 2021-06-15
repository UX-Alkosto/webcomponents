import { css, unsafeCSS } from 'lit';
import { common } from '../../common';

const styles = css`:host {
    align-items: center;
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.base)});
}
a {
    color: var(--primary-color2, #004691);
    text-decoration: underline;
}`;

export { styles };