import { html } from 'lit';

const common = {
	defaultSlot: html`<slot class="content"></slot>`,
	defaultMaxWidth: 1204,
	fontSize: {
		base: '16px',
		h1: '24px !important',
		h2: '18px !important',
		h3: '16px !important',
		h4: '15px !important',
		h5: '14px !important',
		h6: '14px !important',
		p: '14px'
	}
};

export { common };