export async function load() {
	const modules = import.meta.glob('/src/content/issues/*.md');

	let years = {};

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		years[slug] = { ...post.metadata };
	}

	return { years };
}
