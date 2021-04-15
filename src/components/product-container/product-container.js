export default class ProductContainer extends HTMLElement {
    static get observedAttributes() {
        return ['mobile', 'desktop'];
    }
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles)
        this._shadowRoot.appendChild(html.content.cloneNode(true))
        styles.innerHTML = this._setContainerStyles()
    }

    connectedCallback() {}

    attributeChangedCallback() {
        styles.innerHTML = this._setContainerStyles()
    }

    _setContainerStyles() {
        const mobile = this.getAttribute('mobile') || 2
        const desktop = this.getAttribute('desktop') || 4
        return `:host {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 auto;
            max-width: 1204px;
            padding: 0 1rem;
        }
        .container {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${mobile}) - 16px),1fr));
            width: 100%;
        }
        @media screen and (min-width: 768px) {
            .container {
                grid-template-columns: repeat(auto-fill,minmax(calc(calc(100% / ${desktop}) - 16px),1fr))
            }
        }`
    }
}

const html = document.createElement('template')
const styles = document.createElement('style')

html.innerHTML = `<div class="container">
    <slot></slot>
</div>`