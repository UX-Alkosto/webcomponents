import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import cleanup from 'rollup-plugin-cleanup';
import { name, version } from './package.json';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: {
        components: 'index.js'
    },
    output: [{
        banner: `/*! ${name} release: ${version} */`,
        dir: 'dist',
        chunkFileNames: 'component-[hash].js',
        format: 'es'
    }],
    plugins: [
        cleaner({
            targets: [
                './dist/'
            ]
        }),
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
            showGzippedSize: true
        })
    ],
    preserveEntrySignatures: false
};

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser({
        module: true,
        warnings: true
    }));
}

export default config;