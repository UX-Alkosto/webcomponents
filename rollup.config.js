import { babel } from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import cleanup from 'rollup-plugin-cleanup';
import summary from 'rollup-plugin-summary';
import { name, version } from './package.json';

export default {
    input: {
        components: 'index.js'
    },
    output: [{
        banner: `/*! ${name} release: ${version} */`,
        dir: 'dist',
        chunkFileNames: '[name]-[hash].js',
        format: 'esm'
    }],
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    },
    plugins: [
        cleaner({
            targets: [
                './dist/'
            ]
        }),
        replace({
            'Reflect.decorate': 'undefined',
            preventAssignment: true
        }),
        minifyHTML(),
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            }
        }),
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
        babel({
            babelHelpers: 'bundled'
        }),
        summary()
    ],
    preserveEntrySignatures: 'strict'
};