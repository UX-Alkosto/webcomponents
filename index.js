import { Button } from './components/button';
import { Icon } from './components/icon';
import { ItemList } from './components/li';
import { Link } from './components/link';

function getComponentClass(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
    });
}

const components = [
    'acordeon',
    'banner',
    'banner-video',
    'blog-article',
    'card',
    'gallery',
    'grid',
    'list',
    'modal',
    'slider',
    'title-underline',
];

components.forEach(async key => {
    const tagName = `k-${key}`;
    const componentClass = getComponentClass(key);
    if (document.querySelectorAll(tagName).length) {
        await import(`./components/${key}/index.js`).then(component => {
            window.customElements.define(tagName, component[componentClass]);
        });
    }
});

window.customElements.define('k-button', Button);
window.customElements.define('k-icon', Icon);
window.customElements.define('k-li', ItemList);
window.customElements.define('k-link', Link);