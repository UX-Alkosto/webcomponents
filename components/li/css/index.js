import{css} from'lit';
const styles= css`
li {
    color: var(--text-color1);
    line-height: 24px;
    list-style: none;
    padding: 0 10px 10px 10px;
}
li::before {
    content: "•";
    color: var(--main-naranja, #444);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}
@media only screen and (min-width: 768px) {
    li::before {
        margin-left: -1em;
    }
}`;
export {styles};