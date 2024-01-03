import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
	extensions: ['.md']
};

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
