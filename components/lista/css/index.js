import{css} from'lit'
const styles= css`
.split-list {
    color: #444444;
    -webkit-column-count: 1;
    column-count: 1;
    font-size: 14px;
    line-height: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.split-list li {
    list-style: none;
    padding: 0 10px;
}
.split-list li::before {
    content: "•";
    color: red;
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
}
@media only screen and (min-width: 768px) {
    .split-list {
        -webkit-column-count: var(--k-column-list, 1);
        column-count: var(--k-column-list, 1);
    }
    .split-list li::before {
        margin-left: -16px;
    }
}`
export {styles}