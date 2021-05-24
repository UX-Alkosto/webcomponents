import { html } from 'lit';

const common = {
    defaultSlot: html`<slot class="content"></slot>`,
    defaultMaxWidth: 1204,
    fontWidth: {
        h1: '24px',
        h2: '18px',
        h3: '16px',
        h4: '15px',
        h5: '14px',
        h6: '14px',
        p: '14px'
    }
};

export { common };