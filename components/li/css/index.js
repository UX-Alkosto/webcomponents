import{css} from'lit';
const styles= css`
li {
    color: var(--text-color1);
    line-height: 24px;
    list-style: none;
    padding: 0 10px;
}
li::before {
    content: "•";
    color: var(--primary-color1, #444444);
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
}
@media only screen and (min-width: 768px) {
    li::before {
        margin-left: -16px;
    }
}`;
export {styles};