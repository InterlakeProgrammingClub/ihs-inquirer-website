import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const issueModules = import.meta.glob('/src/content/issues/*.md');

	let match = {};
	let articles = [];

	for (const [path, resolver] of Object.entries(issueModules)) {
		if (path.split('/').pop().split('.')[0] === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const issue = await match?.resolver?.();

	if (!issue) {
		throw error(404, 'Issue not found');
	} else {
		const articlesModules = import.meta.glob('/src/content/articles/*.md');
		for (const path in articlesModules) {
			const file = await articlesModules[path]();
			const slug = path.split('/').pop().split('.')[0];

			const year = file.metadata.year?.toLowerCase();
			const quarter = file.metadata.quarter?.toLowerCase();
			if (params.slug.split('-').slice(0, 3).join('-') === year + '-' + quarter) {
				file.metadata.slug = slug;
				articles.push({ ...file.metadata });
			}
		}
	}

	return {
		content: issue.default,
		issue: issue.metadata,
		articles
	};
}
