export default class Card extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles.content.cloneNode(true))
        this._shadowRoot.appendChild(html.content.cloneNode(true))
    }

    connectedCallback() {
    }

    _handleClick() {
        this.addEventListener('click', e => {
            window.location = this.getAttribute('href')
        })
    }
    disconnectedCallback() {
        this.removeEventListener('click', this._handleClick)
    }
}

const styles = document.createElement('template')
const html = document.createElement('template')

html.innerHTML = `<slot></slot>`
styles.innerHTML = `<style>
    :host{
        box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
        padding: 1rem;
        transition: ease-in-out .3s all;
    }
    :host(:hover),
    :host(:focus){
        box-shadow: 0 2px 5px 2px rgba(0,0,0,.2);
    }
    :host([is=product-item]) {
        margin-top: 2rem;
        text-align: center;
    }
    :host([is=product-item]) ::slotted(img) {
        margin-top: -3rem;
        max-width: 100%;
        width: auto;
    }
    :host([is=product-item]) ::slotted(p) {
        text-align: initial;
    }
    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(strong) {
        color: var(--primary-color2);
    }
    ::slotted(p) {
        color: var(--text-color1);
        display: none;
        font-size: var(--font-base);
        line-height: 1.572em;
    }
    @media screen and (min-width: 768px) {
        ::slotted(p) {
            display: block;
        }
    }
</style>`