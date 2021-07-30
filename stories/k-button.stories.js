import { html } from 'lit-html';
import '../dist/components.js';

export default {
    title: 'Componentes/Botón',
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
        variant: {
            options: ['primary', 'outline'],
            control: {
                type: 'select',
                labels: {
                    primary: 'Primary',
                    outline: 'Outline'
                }
            }
        }
    },
};

const Template = ({ variant, label }) =>
    html`<k-button variant=${variant}>${label}</k-button>`;

export const Primary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
    store: 'ktronix',
    variant: 'primary',
    label: 'Botón principal',
    href: '#'
};

Outline.args = {
    ...Primary.args,
    variant: 'outline',
    label: 'Botón Secundario',
};
