export const prerender = false;

export async function load({ url }) {
	let query = url.searchParams.get('q');

	const modules = import.meta.glob('/src/content/articles/*.md');

	let articles = [];

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles.push({ ...post.metadata, slug: slug });
	}

	const results = articles.filter((item) => {
		return (
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase())
		);
	});

	return {
		results: results,
		query: query
	};
}
