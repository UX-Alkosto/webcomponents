import { html } from 'lit-html';
import '../dist/components.js';

export default {
    title: 'Componentes/Banner',
    argTypes: {
        store: {
            options: ['alkomprar', 'alkosto', 'kalley', 'ktronix'],
            control: {
                type: 'select',
                labels: {
                    alkomprar: 'Alkomprar',
                    alkosto: 'Alkosto',
                    kalley: 'Kalley',
                    ktronix: 'Ktronix'
                }
            }
        },
        height: {
            control: {
                type: 'number',
            }
        },
        type: {
            options: ['left', 'right', 'left-cut', 'right-cut', 'full'],
            control: {
                type: 'select',
                labels: {
                    left: 'Izquierda',
                    right: 'Derecha',
                    'left-cut': 'Izquierda cortado',
                    'right-cut': 'Derecha cortado',
                    full: 'Ancho completo'
                }
            }
        }
    },
};

const Template = ({ src, height, type, label }) =>
    html`<k-banner src=${src} height=${height} type=${type}>${label}</k-banner>`;

export const Left = Template.bind({});
export const Right = Template.bind({});
export const LeftCut = Template.bind({});
export const RightCut = Template.bind({});
export const Full = Template.bind({});

Left.args = {
    height: 300,
    src: 'https://cdn.statically.io/img/ux-alkosto.github.io/f=auto,q=75/webcomponents/assets/images/banner-2.png',
    store: 'ktronix',
    type: 'left',
    label: 'Botón principal',
};

Right.args = {
    ...Left.args,
    type: 'right',
    label: 'Botón Secundario',
};

LeftCut.args = {
    ...Left.args,
    height: 180,
    src: 'https://cdn.statically.io/img/ux-alkosto.github.io/f=auto,q=75/webcomponents/assets/images/banner-1.png',
    type: 'left-cut',
    label: 'Botón Secundario',
};

RightCut.args = {
    ...LeftCut.args,
    type: 'right-cut',
};

Full.args = {
    ...Left.args,
    src: 'https://cdn.statically.io/img/ux-alkosto.github.io/f=auto,q=75/webcomponents/assets/images/banner-3.png',
    type: 'full',
    label: 'Botón Secundario',
};