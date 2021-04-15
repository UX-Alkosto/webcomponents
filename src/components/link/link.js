export default class ProductItem extends HTMLElement {
    static get observedAttributes() {
        return ['icon'];
    }

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles.content.cloneNode(true))
        this._shadowRoot.appendChild(html.content.cloneNode(true))
    }

    connectedCallback() {
        const link = this._shadowRoot.querySelector('a');
        (this.hasAttribute('title')) ? link.setAttribute('title', this.getAttribute('title')) : '';
        (this.hasAttribute('href')) ? link.setAttribute('href', this.getAttribute('href')) : '';
        this._handleClick()
        if(this.hasAttribute('icon')){
            this._setIcon()
            this._setIconStyles()
        }
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._handleClick)
    }

    _handleClick() {
        const link = this._shadowRoot.querySelector('a');
        this.addEventListener('click', _ => link.click())
    }

    _setIcon() {
        const $icon = this._shadowRoot.querySelectorAll('#icon');
        if ($icon.length) return Object.assign($icon, {
            class: this.getAttribute('icon')
        });

        const icon = document.createElement('span')
        Object.assign(icon, {
            id: 'icon',
            classList: this.getAttribute('icon')
        })
        return this._shadowRoot.appendChild(icon)
    }

    _setIconStyles(){
        if (this._shadowRoot.querySelectorAll('#icon-styles').length) return;
        const iconStyles = document.createElement('link')
        Object.assign(iconStyles, {
            id: 'icon-styles',
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/gh/ux-alkosto/icons/style.min.css'
        })
        return this._shadowRoot.appendChild(iconStyles);
    }
}

const styles = document.createElement('template')
const html = document.createElement('template')

html.innerHTML = `<a>
    <slot></slot>
</a>`
styles.innerHTML = `<style>
    :host {
        align-items: center;
        cursor: pointer;
        display: inline-block;
    }
    a {
        color: var(--primary-color2);
        text-decoration: underline;
    }
    span {
        color: var(--primary-color1);
    }
</style>`