export default class Banner extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'closed' })
        this._shadowRoot.appendChild(styles.content.cloneNode(true))
        this._shadowRoot.appendChild(html.content.cloneNode(true))
    }

    connectedCallback() {
        const imageContainer = document.createElement('section')
        const image = document.createElement('img')
        const container = this._shadowRoot.querySelector('.container')
        const slot = this._shadowRoot.querySelector('.content')

        if (this.hasAttribute('src')) {
            imageContainer.classList.add(this.type)
            image.setAttribute('loading', 'lazy')
            image.setAttribute('src', this.getAttribute('src'))
            imageContainer.appendChild(image)
        }

        switch (this.type) {
            case 'left':
            case 'left-cut':
            case 'full':
                container.insertBefore(imageContainer, slot)
                break;
            default:
                container.appendChild(imageContainer)
                break;
        }
    }

    get type() {
        return this.getAttribute('type') || 'left'
    }
}

const styles = document.createElement('template')
const html = document.createElement('template')

html.innerHTML = `<div class="container">
    <section class="content">
        <slot></slot>
    </section>
</div>`

styles.innerHTML = `<style>
    :host {
        color: var(--text-color1);
        display: flex;
        flex-wrap: wrap;
        font-size: var(--font-base, 14px);
        justify-content: center;
        overflow: hidden;
    }
    :host([type=full]) .container {
        flex-wrap: wrap;
        max-width: 1204px;
    }
    :host([type=full]) .content {
        text-align: center;
        align-items: stretch;
    }
    :host([type=left]),
    :host([type=right]) {
        background-color: var(--k-brand-banner-background-color, #F5F5F5);
    }
    :host([type=left-cut]) .container,
    :host([type=right-cut]) .container {
        background-color: var(--k-brand-banner-background-color, #F5F5F5);
    }
    :host([type=left]) .content,
    :host([type=right]) .content {
        align-items: flex-start;
    }
    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(strong) {
        color: var(--primary-color2);
    }
    ::slotted(h2) {
        font-size: 1.125rem;
    }
    ::slotted(h3) {
        font-size: 1rem;
    }
    ::slotted(p) {
        color: var(--text-color1);
        font-size: var(--font-base);
        line-height: 1.572em;
    }
    .container {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        max-width: 1204px;
    }
    section {
        align-items: center;
        display: flex;
    }
    .content {
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        order: 2;
    }
    .full{
        flex-basis: 100%;
    }
    .left,
    .left-cut,
    .right,
    .right-cut {
        flex-basis: 100%;
    }
    .full img,
    .left img,
    .left-cut img,
    .right img,
    .right-cut img {
        height: auto;
        max-width: 100%;
        object-fit: cover;
        width: 100%;
    }
    @media screen and (min-width: 768px) {
        :host([type=full]) .content{
            align-items: center;
            flex-basis: 100%;
        }
        .container {
            flex-direction: row;
            justify-content: space-between;
        }
        .content {
            order: unset;
        }
        .left,
        .right{
            flex-basis: 60%;
        }
        .left-cut,
        .right-cut {
            flex-basis: 40%;
        }
        .left-cut {
            margin-left: 0;
            filter: drop-shadow(8px 0 0 var(--primary-color2));
        }
        .left-cut img {
            clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
        }
        .right-cut {
            margin:right: 0;
            filter: drop-shadow(-8px 0 0 var(--primary-color2));
        }
        .right-cut img {
            clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
        }
    }
</style>`