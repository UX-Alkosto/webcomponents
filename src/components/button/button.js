export default class Button extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles.content.cloneNode(true))
    }

    connectedCallback() {
        const button = document.createElement('button')
        button.innerHTML = slot.innerHTML;
        (this.hasAttribute('title')) ? button.setAttribute('title', this.getAttribute('title')) : '';
        (this.hasAttribute('type')) ? button.setAttribute('type', this.getAttribute('type')) : '';
        (this.hasAttribute('disabled')) ? button.setAttribute('disabled', this.getAttribute('disabled')) : '';
        (this.hasAttribute('href')) ? this._handleClick() : '';
        this._shadowRoot.appendChild(button);
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
const slot = document.createElement('template')

slot.innerHTML = '<slot></slot>'
styles.innerHTML = `<style>
    :host {
        display: flex;
        cursor: pointer;
        outline: none;
        width: auto;
    }
    button {
        align-items: center;
        background-color: var(--button-primary-background-color);
        border: var(--button-primary-border);
        border-radius: var(--button-radius);
        color: var(--button-primary-text-color);
        cursor: pointer;
        display: flex;
        flex: 1;
        font-size: 1rem;
        font-weight: bold;
        justify-content: center;
        line-height: 1.125rem;
        min-height: 56px;
        outline: none;
        padding: 16px 24px;
        transition: ease-in-out .3s all;
        width: 100%;
    }
    :host([btn-style=outline]) button {
        background-color: var(--button-outline-background-color);
        border: var(--button-outline-border);
        color: var(--button-outline-text-color);
    }
    :host(:focus) button,
    :host(:hover) button,
    button:focus,
    button:hover,
    :host([btn-style=outline]) button:focus,
    :host([btn-style=outline]) button:hover {
        background-color: var(--button-primary-background-color-hover);
        border-color: var(--button-primary-background-color-hover);
    }
    :host([btn-style=outline]:focus) button,
    :host([btn-style=outline]:hover) button,
    :host([btn-style=outline]) button:focus,
    :host([btn-style=outline]) button:hover {
        color: var(--button-primary-text-color-hover);
    }
</style>`