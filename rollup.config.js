import { babel } from '@rollup/plugin-babel';
import { name, version } from './package.json';
import alias from '@rollup/plugin-alias';
import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

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
			exclude: ['node_modules/**', 'dist/**'],
			presets: [
				[
					'@babel/preset-env',
					{
						shippedProposals: true,
						useBuiltIns: 'usage',
						corejs: 3,
					},
				],
			]
		}),
	],
	preserveEntrySignatures: 'strict',
	treeshake: {
		preset: 'smallest',
		propertyReadSideEffects: true
	}
};