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

	if (!bio) {
		let nameFromSlug = decodeURIComponent(params.slug.replace(/-/g, ' '));

		console.log(nameFromSlug);

		let name;
		for (const article of articles) {
			console.log(article.authors);
			for (const author of article.authors) {
				if (author.name.toLowerCase() === nameFromSlug) {
					name = author.name;
					break;
				}
			}
		}

		if (!name) {
			throw error(404, 'Bio not found');
		}

		bio = { metadata: { title: name, role: 'Contributor', description: '', image: '' } };
	}

	const personalArticles = articles.filter((item) => {
		if (item.authors) {
			return item.authors.some((author) => author.name === bio.metadata.title);
		}
	});

	return {
		bio: bio.metadata,
		articles: personalArticles
	};
}
