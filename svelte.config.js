import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$static: path.resolve('./static'),
					$utils: path.resolve('./src/lib/utils'),
					$stores: path.resolve('./src/lib/stores'),
					$actions: path.resolve('./src/lib/actions'),
					$components: path.resolve('./src/lib/components')
				}
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;',
						base: '@use "src/base.scss" as *;'
					}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
				base: '@use "src/base.scss" as *;'
			}
		})
	]
};

export default config;
