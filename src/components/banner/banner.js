import { LitElement, css, html } from "lit-element";

export class Banner extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean, reflect: true },
            src: { type: String },
            type: { type: String }
        }
    }
    static get styles() {
        return css`:host {
                color: var(--text-color1, #444444);
                display: flex;
                flex-wrap: wrap;
                font-family: var(--font-family, 'Arial');
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
                color: var(--primary-color2, #004691);
            }
            ::slotted(h2) {
                font-size: 1.125rem;
            }
            ::slotted(h3) {
                font-size: 1rem;
            }
            ::slotted(p) {
                color: var(--text-color1, #444444);
                font-size: var(--font-base, 14px);
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
            section,
            slot {
                align-items: center;
                display: flex;
            }
            .content {
                flex: 1;
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
                    align-items: flex-start;
                    order: unset;
                }
                .left,
                .right{
                    flex-basis: 60%;
                }
                .left-cut,
                .right-cut {
                    align-items: stretch;
                    flex-basis: 40%;
                }
                .left-cut {
                    margin-left: 0;
                    filter: drop-shadow(8px 0 0 var(--primary-color2, #004691));
                }
                .left-cut img {
                    clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
                }
                .right-cut {
                    margin-right: 0;
                    filter: drop-shadow(-8px 0 0 var(--primary-color2, #004691));
                }
                .right-cut img {
                    clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
                }
            }
        `;
    }
    constructor() {
        super();
        this.src = ''
        this.type = 'left'
        this.loaded = false
    }
    render() {
        this.loaded = true
        return html `<div class="container">
                ${this.type == 'left' || this.type == 'left-cut' || this.type == 'full' ? this.getImage(this.src, this.type) : ''}
                <slot class="content"></slot>
                ${this.type == 'right' || this.type == 'right-cut' ? this.getImage(this.src, this.type) : ''}
            </div>`;
    }
    getImage (src, type) {
        return html`<section class="${type}">
            <img loading="lazy" src="${src}"/>
        </section>`;
    }
}