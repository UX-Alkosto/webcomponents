import { Card } from './components/card';
import { Icon } from './components/icon';
import { ItemList } from './components/li';
import { Modal } from './components/modal';

window.customElements.define('k-card', Card);
window.customElements.define('k-icon', Icon);
window.customElements.define('k-li', ItemList);
window.customElements.define('k-modal', Modal);

function getComponentClass(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str.replace(/-([a-z])/g, (g) => {
		return g[1].toUpperCase();
	});
}

function hasChildren({ children, nodeType, outerHTML, tagName }) {
	if (!children || !children.length || nodeType !== 1 || !outerHTML) return;
	const hasTag = outerHTML.includes('k-');
	tagName.toLowerCase().includes('k-') && importComponent(tagName);
	if (!hasTag) return;
	Array.from(children).forEach(child => hasChildren(child));
}

function importComponent(tag) {
	const tagName = tag.toLowerCase();
	const componetKey = tagName.replace('k-', '');
	const componentClass = getComponentClass(componetKey);
	if (lazyComponents.includes(componetKey)) {
		if (!imported[tagName]) {
			imported[tagName] = true;
			import(`./components/${componetKey}/index.js`).then(component => {
				window.customElements.define(tagName, component[componentClass]);
			});
		}
	}
}

const lazyComponents = [
	'acordeon',
	'banner',
	'banner-video',
	'blog-article',
	'button',
	'gallery',
	'grid',
	'link',
	'list',
	'slider',
	'title-underline'
];
const imported = {
	'k-card': true,
	'k-icon': true,
	'k-li': true,
	'k-modal': true
};
const bodyObserver = new MutationObserver(mutations => {
	mutations.forEach(({ addedNodes, type }) => {
		if (type === 'childList') {
			addedNodes.forEach(node => hasChildren(node));
		}
	});
});
const elementsObserver = new IntersectionObserver((entries, observerRef) => {
	entries.forEach(({ isIntersecting, target }) => {
		if (isIntersecting) {
			const tagName = target.tagName.toLowerCase();
			const componetKey = tagName.replace('k-', '');
			const componentClass = getComponentClass(componetKey);
			observerRef.unobserve(target);
			if (!imported[tagName]) {
				imported[tagName] = true;
				import(`./components/${componetKey}/index.js`).then(component => {
					window.customElements.define(tagName, component[componentClass]);
				});
			}
		}
	});
}, { rootMargin: '0px 0px 250px 0px' });

lazyComponents.forEach(component => {
	const tagName = `k-${component}`;
	const tags = Array.from(document.querySelectorAll(tagName));
	tags.length && tags.forEach(tag => elementsObserver.observe(tag));
});

bodyObserver.observe(document.body, {
	childList: true,
	subtree: true
});