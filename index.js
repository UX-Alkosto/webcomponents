import { Button } from './components/button';
import { Icon } from './components/icon';
import { ItemList } from './components/li';
import { Link } from './components/link';
import { TitleUnderline } from './components/title-underline';

if (document.querySelectorAll('k-acordeon').length) {
    import('./components/acordeon/index.js').then(component => {
        window.customElements.define('k-acordeon', component['Acordeon']);
    });
}

if (document.querySelectorAll('k-banner').length) {
    import('./components/banner/index.js').then(component => {
        window.customElements.define('k-banner', component['Banner']);
    });
}

if (document.querySelectorAll('k-banner-video').length) {
    import('./components/banner-video/index.js').then(component => {
        window.customElements.define('k-banner-video', component['BannerVideo']);
    });
}

if (document.querySelectorAll('k-blog-article').length) {
    import('./components/blog-article/index.js').then(component => {
        window.customElements.define('k-blog-article', component['BlogArticle']);
    });
}

if (document.querySelectorAll('k-card').length) {
    import('./components/card/index.js').then(component => {
        window.customElements.define('k-card', component['Card']);
    });
}

if (document.querySelectorAll('k-gallery').length) {
    import('./components/gallery/index.js').then(component => {
        window.customElements.define('k-gallery', component['Gallery']);
    });
}

if (document.querySelectorAll('k-grid').length) {
    import('./components/grid/index.js').then(component => {
        window.customElements.define('k-grid', component['Grid']);
    });
}

if (document.querySelectorAll('k-list').length) {
    import('./components/list/index.js').then(component => {
        window.customElements.define('k-list', component['List']);
    });
}

if (document.querySelectorAll('k-slider').length) {
    import('./components/slider/index.js').then(component => {
        window.customElements.define('k-slider', component['Slider']);
    });
}

window.customElements.define('k-button', Button);
window.customElements.define('k-icon', Icon);
window.customElements.define('k-li', ItemList);
window.customElements.define('k-link', Link);
window.customElements.define('k-title-underline', TitleUnderline);