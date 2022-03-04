import { Slider } from '../slider';
import { Core as coreStyles, Theme as themeStyles } from './css';

export class Gallery extends Slider {
	static get styles() {
		return [
			super.styles,
			coreStyles,
			themeStyles
		];
	}
	constructor() {
		super();
	}
}
