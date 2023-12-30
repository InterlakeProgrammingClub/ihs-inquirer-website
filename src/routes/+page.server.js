import { getDate } from '$lib/js/utils.js';

export async function load() {
	const articleModules = import.meta.glob('/src/content/articles/*.md');
	const woofModules = import.meta.glob('/src/content/woofs/*.md');

	let articles = [];

	for (const path in articleModules) {
		const post = await articleModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles.push({ slug, ...post.metadata });
	}

	articles.sort((a, b) => {
		return Date(a.date) > Date(b.date) ? -1 : 1;
	});

	let latestWoof = {};
	for (const path in woofModules) {
		const file = await woofModules[path]();
		if (Object.keys(latestWoof).length === 0) {
			latestWoof = { ...file.metadata };
		} else if (getDate(file.metadata.title) > getDate(latestWoof.title)) {
			latestWoof = { ...file.metadata };
		}
	}

	return { articles, woof: latestWoof };
}
