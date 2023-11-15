import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// bio
	const bioModules = import.meta.glob('/src/content/bios/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(bioModules)) {
		if (path.split('/').pop().split('.')[0] === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const bio = await match?.resolver?.();

	if (!bio) {
		throw error(404, 'Staff not found');
	}

	// articles
	const articleModules = import.meta.glob('/src/content/articles/*.md');

	let articles = [];

	for (const path in articleModules) {
		const post = await articleModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles.push({ ...post.metadata, slug: slug });
	}

	const personalArticles = articles.filter(
		(item) => item.author.includes(bio.metadata.title) === true
	);

	return {
		bio: bio.metadata,
		articles: personalArticles
	};
}
