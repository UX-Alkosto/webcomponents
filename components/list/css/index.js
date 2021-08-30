import{css, unsafeCSS} from'lit';
import { common } from '../../common';
const styles= css`
ul {
    color: var(--text-color1, #444);
    -webkit-column-count: 1;
    column-count: 1;
    font-family: var(--font-family, 'Arial');
    font-size: var(--font-base, ${unsafeCSS(common.fontSize.base)});
    line-height: 24px;
    list-style: none;
    margin: 0;
    padding: 0px 20px;
}
@media only screen and (min-width: 768px) {
    ul {
        -webkit-column-count: var(--k-column-list, 1);
        column-count: var(--k-column-list, 1);
    }
}`;
export {styles};