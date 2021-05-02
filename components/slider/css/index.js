import { css } from 'lit';
import { Core } from './core.js';
import { Theme } from './theme.js';

const styles = css`:host {
    background-color: var(--k-slider-background-color, #fff);
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;
    justify-content: center;
    margin: 0 auto 2rem;
    padding: 0 1rem;
}
@media screen and (min-width: 768px) {
    :host {
        padding: 0;
    }
}`;

export { styles, Core, Theme };