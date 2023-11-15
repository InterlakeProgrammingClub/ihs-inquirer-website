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

	let bio = await match?.resolver?.();

	// articles
	const articleModules = import.meta.glob('/src/content/articles/*.md');

	let articles = [];

	for (const path in articleModules) {
		const post = await articleModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles.push({ ...post.metadata, slug: slug });
	}

	let personalArticles;

	if (!bio) {
		let nameFromSlug = decodeURIComponent(params.slug.replace(/\s+/g, '-'));
		let name;
		articles.forEach((item) => {
			if (item.authors_other && item.authors_other.toLowerCase().includes(nameFromSlug)) {
				name = item.author;
			}
		});

		if (!name) {
			throw error(404, 'Bio not found');
		}

		bio = { metadata: { title: name, role: '', description: '', image: '' } };
		personalArticles = articles.filter((item) => item.author.includes(name) === true);
	}

	personalArticles = articles.filter((item) => item.author.includes(bio.metadata.title) === true);

	return {
		bio: bio.metadata,
		articles: personalArticles
	};
}
