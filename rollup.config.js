import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'src/components.js',
    output: {
        dir: 'dist',
        format: 'es',
    },
    plugins: [
        minifyHTML(),
        copy(copyConfig),
        resolve(),
        alias({
            entries: [{
                find: 'lit-html/lib/shady-render.js',
                replacement: 'node_modules/lit-html/lit-html.js'
            }]
        }),
        cleanup({
            comments: 'none'
        })
    ],
    preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;