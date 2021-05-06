import { css } from 'lit';
import { Core } from './core.js';
import { Theme } from './theme.js';

const styles = css`:host {
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;
    justify-content: center;
    margin: 0 auto 2rem;
    padding: 0;
}
:host([bullets=true]){
    padding-bottom: 2em;
}
`;

export { styles, Core, Theme };