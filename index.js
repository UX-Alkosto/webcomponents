import { Banner } from './components/banner';
import { Button } from './components/button';
import { Card } from './components/card';
import { Grid } from './components/grid';
import { Icon } from './components/icon';
import { ItemList } from './components/li';
import { Link } from './components/link';
import { Slider } from './components/slider';
import { TitleUnderline } from './components/title-underline';

window.customElements.define('k-banner', Banner);
window.customElements.define('k-button', Button);
window.customElements.define('k-card', Card);
window.customElements.define('k-grid', Grid);
window.customElements.define('k-icon', Icon);
window.customElements.define('k-li', ItemList);
window.customElements.define('k-link', Link);
window.customElements.define('k-slider', Slider);
window.customElements.define('k-title-underline', TitleUnderline);

function getComponentClass(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
    });
}

const components = [
    'acordeon',
    'banner-video',
    'blog-article',
    'gallery',
    'list',
    'modal',
];

components.forEach(key => {
    const tagName = `k-${key}`;
    const componentClass = getComponentClass(key);
    if (document.querySelectorAll(tagName).length) {
        import(`./components/${key}/index.js`).then(component => {
            window.customElements.define(tagName, component[componentClass]);
        });
    }
});