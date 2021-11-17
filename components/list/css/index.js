import{css, unsafeCSS} from'lit';
import { common } from '../../common';
const styles= css`
ul {
    color: var(--text-color1, #444);
    -webkit-column-count: 1;
    column-count: 1;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.p)});
    line-height: 1.572em;
    list-style: none;
    padding: 0;
}
@media only screen and (min-width: 768px) {
    ul {
        -webkit-column-count: var(--k-column-list, 1);
        column-count: var(--k-column-list, 1);
    }
}`;
export {styles};