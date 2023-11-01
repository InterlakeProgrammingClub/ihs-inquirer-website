export async function load() {
	const modules = import.meta.glob('/src/issues/*.md');

	let posts = {};

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		posts[slug] = { ...post.metadata };
	}

	return { posts };
}
