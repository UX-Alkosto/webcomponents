import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import cleanup from 'rollup-plugin-cleanup';

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
        resolve(),
        alias({
            entries: [{
                find: 'lit-html/lib/shady-render.js',
                replacement: 'node_modules/lit-html/lit-html.js'
            }]
        }),
        cleanup({
            comments: 'none'
        }),
        filesize({
            showMinifiedSize: true,
            showBrotliSize: true,
            showGzippedSize: true
        })
    ],
    preserveEntrySignatures: false,
};

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser({
        module: true,
        warnings: true
    }));
}

export default config;