import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// bio
	const bioInfo = import.meta.glob('/src/content/bios/*.md');

	let bios = {};

	for (const path in bioInfo) {
		const file = await bioInfo[path]();
		const slug = path.split('/').pop().split('.')[0];
		bios[slug] = { ...file.metadata };
	}

	bios = Object.values(bios);
	bios.sort((a, b) => {
		if (a.order != b.order) {
			return a.order > b.order ? 1 : -1;
		} else {
			return a.title.localeCompare(b.title) ? 1 : -1;
		}
	});

	const slugs = bios.map((item) => item.title.replace(' ', '-').toLowerCase());

	if (!slugs.includes(params.slug)) {
		throw error(404, 'Page Not Found');
	}

	const title = params.slug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	const data = bios.find((item) => item.title === title);

	// articles
	const articleInfo = import.meta.glob('/src/content/articles/*.md');

	let articles = {};

	for (const path in articleInfo) {
		const file = await articleInfo[path]();
		const slug = path.split('/').pop().split('.')[0];
		articles[slug] = { ...file.metadata };
	}

	articles = Object.values(articles);
	articles.sort((a, b) => {
		if (a.order != b.order) {
			return a.order > b.order ? 1 : -1;
		} else {
			return a.title.localeCompare(b.title) ? 1 : -1;
		}
	});

	const personalArticles = articles.filter((item) => item.author.includes(title) === true);

	return {
		bio: data,
		articles: personalArticles ? personalArticles : ''
	};
}
