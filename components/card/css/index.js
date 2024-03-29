import {css} from 'lit';

const styles = css`
	:host {
		background-color: var(--k-card-background-color, #fff);
		border-radius: var(--k-card-border-radius, 4px);
		display: inline-block;
		margin: 0 0.25em;
		max-width: 100%;
		padding: 1rem;
		transition: ease-in-out 0.3s all;
		width: auto;
	}
	:host([href]) {
		cursor: pointer;
	}
	:host([shadow]) {
		box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
		will-change: box-shadow;
	}
	:host([shadow]:hover),
	:host([shadow]:focus) {
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);
	}
	:host([type='category-item']) {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.5rem;
		text-align: center;
	}
	:host([type='category-product']) {
		align-items: end;
		display: flex;
		padding: 0 10px;
	}
	:host([type='category-product']) ::slotted(img) {
		transition: transform 0.3s ease-in-out;
		order: 2;
		width: 20%;
	}
	:host([type='category-product']:hover) ::slotted(img) {
		transform: scale3d(1.2, 1.2, 1);
	}
	:host([type='category-product']) ::slotted(h3) {
		font-size: 16px;
		font-weight: normal;
		order: 1;
		width: 80%;
	}
	:host([type='icon-item']) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 10px;
	}

	:host([type='icon-item']) ::slotted(h3) {
		margin: 10px 0;
		text-align: center;
		width: 100%;
	}

	:host([type='icon-item']) ::slotted(p) {
		margin: 0 0 20px 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:host([type='icon-item'][variant='outline']) ::slotted(k-icon) {
		border: solid 2px var(--primary-color1);
		border-radius: 50px;
		font-size: 40px;
		height: 90px;
		margin-top: -30px;
		width: 90px;
		align-items: center;
		text-align: center;
		display: flex;
		justify-content: center;
		background-color: #ffffff;
	}

	:host([type='icon-item'][variant='fill']) ::slotted(k-icon) {
		border: none;
		border-radius: 50px;
		color: var(--primary-color2, #959595);
		font-size: 40px;
		height: 90px;
		margin-top: -30px;
		width: 90px;
		align-items: center;
		text-align: center;
		display: flex;
		justify-content: center;
		background-color: var(--card-icon-background-fill, #f5f5f5);
	}

	:host([type='product-item']) {
		margin-top: 2rem;
		text-align: center;
	}

	:host([type='product-item']) ::slotted(img),
	:host([type='product-item']) ::slotted(k-img) {
		margin-top: -3rem;
		max-width: 100%;
		transition: 0.3s ease-in-out transform;
		width: auto;
		will-change: transform;
	}
	:host([type='product-item']:hover) ::slotted(img),
	:host([type='product-item']:hover) ::slotted(k-img) {
		transform: scale3d(1.1, 1.1, 1);
	}
	:host([type='product-item']) ::slotted(p) {
		text-align: initial;
	}
	::slotted(h1),
	::slotted(h2),
	::slotted(h3),
	::slotted(strong) {
		color: var(--primary-color2, #004691) !important;
	}
	::slotted(p) {
		color: var(--text-color1, #444444);
		display: none;
		font-size: var(--font-base, 14px);
		line-height: 1.572em;
	}
	:host([type='category-item']) ::slotted(k-icon) {
		font-size: var(--font-base, 24px);
		line-height: 1.572em;
		margin: 0;
	}
	:host([type='category-item']) ::slotted(p) {
		display: block;
		font-size: var(--font-base, 14px);
		line-height: 1.125em;
		margin: 0;
	}

	:host([type='full-image-width']) {
		padding: 0 0 1rem 0;
	}

	:host([type='full-image-width']) ::slotted(img) {
		border-top-left-radius: var(--k-card-border-radius, 4px);
		border-top-right-radius: var(--k-card-border-radius, 4px);
		width: 100%;
	}

	:host([type='full-image-width']) ::slotted(h3),
	:host([type='full-image-width']) ::slotted(p) {
		padding: 0 1rem;
	}

	:host([type='full-image-width']) ::slotted(k-link) {
		display: inline-flex;
		justify-content: center;
		width: 100%;
	}
	:host([type='full-image-width']) ::slotted(k-button) {
		display: flex;
		margin: 0 1rem;
		width: auto;
	}

	@media screen and (min-width: 768px) {
		::slotted(p) {
			display: block;
		}
		:host([type='category-product']) ::slotted(img) {
			width: 30%;
		}
		:host([type='category-product']) ::slotted(h3) {
			width: 70%;
		}
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		:host([type='category-product']) ::slotted(img) {
			width: 20%;
		}
		:host([type='category-product']) ::slotted(h3) {
			width: 80%;
		}
	}
`;

export {styles};
