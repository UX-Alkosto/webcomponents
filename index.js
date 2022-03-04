import { Icon } from './components/icon';
import { ItemList } from './components/li';
import { Modal } from './components/modal';

window.customElements.define('k-icon', Icon);
window.customElements.define('k-li', ItemList);
window.customElements.define('k-modal', Modal);

function getComponentClass(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str.replace(/-([a-z])/g, (g) => {
		return g[1].toUpperCase();
	});
}

const lazyComponents = [
	'acordeon',
	'banner',
	'banner-video',
	'blog-article',
	'button',
	'card',
	'gallery',
	'grid',
	'link',
	'list',
	'slider',
	'title-underline'
];
const imported = {};
const observer = new IntersectionObserver((entries, observerRef) => {
	entries.forEach(async entry => {
		if (entry.isIntersecting) {
			const tagName = entry.target.tagName.toLowerCase();
			const componetKey = tagName.replace('k-', '');
			const componentClass = getComponentClass(componetKey);
			observerRef.unobserve(entry.target);
			if (!imported[tagName]) {
				imported[tagName] = true;
				await import(`./components/${componetKey}/index.js`).then(component => {
					window.customElements.define(tagName, component[componentClass]);
				});
			}
		}
	});
}, { rootMargin: '0px 0px 250px 0px' });

lazyComponents.forEach(component => {
	const tagName = `k-${component}`;
	const tags = document.querySelectorAll(tagName);
	tags.length && tags.forEach(tag => observer.observe(tag));
});