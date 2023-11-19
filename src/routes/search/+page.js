export const prerender = false;

export async function load({ params, url }) {
	let query = url.searchParams.get('q');

	const modules = import.meta.glob('/src/content/articles/*.md');

	let articles = [];

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles.push({ ...post.metadata, slug: slug });
	}

	const results = articles.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

	return {
		results: results,
		query: query
	};
}
