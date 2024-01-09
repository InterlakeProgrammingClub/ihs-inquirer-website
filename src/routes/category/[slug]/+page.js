import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ params }) {
	const modules = import.meta.glob('/src/content/articles/*.md');

	let articles = [];

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		post.metadata.slug = slug;
		articles.push({ ...post.metadata });
	}

	const results = articles.filter((item) => {
		return item.categories?.some((title) => title === params.slug);
	});

	if (results.length === 0) throw error(404, 'Category not found');

	return {
		results: results,
		query: params.slug
	};
}
