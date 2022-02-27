import { babel } from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import cleanup from 'rollup-plugin-cleanup';
import summary from 'rollup-plugin-summary';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { name, version } from './package.json';

export default {
    input: {
        components: 'index.js'
    },
    output: [{
        banner: `/*! ${name} release: ${version} */`,
        dir: 'dist',
        chunkFileNames: `${name}-${version}-[hash].js`,
        format: 'es'
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
        dynamicImportVars(),
        resolve(),
        minifyHTML(),
        terser({
            ecma: 2017,
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            }
        }),
        alias({
            entries: [{
                find: 'lit-html/lib/shady-render.js',
                replacement: 'node_modules/lit-html/lit-html.js'
            }]
        }),
        cleanup({
            comments: 'none'
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        summary()
    ],
    preserveEntrySignatures: 'strict',
    'treeshake': {
        preset: 'smallest',
        propertyReadSideEffects: true
    }
};