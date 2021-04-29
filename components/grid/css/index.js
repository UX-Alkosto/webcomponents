import { css } from 'lit-element';

const styles = css` :host {
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;
    justify-content: center;
    margin: 0 auto 2rem;
    padding: 0 1rem;
}
.content {
    display: grid;
    grid-gap: 1rem;
    width: 100%;
}
@media screen and (min-width: 768px) {
    :host {
        padding: 0;
    }
}`;

export { styles };