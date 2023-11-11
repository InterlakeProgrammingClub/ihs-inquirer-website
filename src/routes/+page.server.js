export async function load() {
	const modules = import.meta.glob('/src/content/articles/*.md');

	let articles = {};

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles[slug] = { ...post.metadata };
	}

	return { posts: articles };
}
