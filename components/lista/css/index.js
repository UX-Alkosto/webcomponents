import{css} from'lit';
const styles= css`
ul {
    color: #444444;
    -webkit-column-count: 1;
    column-count: 1;
    font-size: 14px;
    line-height: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
}
::slotted (li) {
    list-style: none;
    padding: 0 10px;
}
::slotted(li:before) {
    content: "•";
    color: red;
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
}
@media only screen and (min-width: 768px) {
    ul {
        -webkit-column-count: var(--k-column-list, 1);
        column-count: var(--k-column-list, 1);
    }
    ::slotted(li:before) {
        margin-left: -16px;
    }
}`;
export {styles};