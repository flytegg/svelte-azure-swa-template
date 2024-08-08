import azure from 'svelte-adapter-azure-swa'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: azure({
			esbuildOptions: {
				keepNames: true
			}
		})
	},
	vite: {
		optimizeDeps: {
			include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
		}
		// plugins: []
	},
	preprocess: vitePreprocess()
};

export default config
