import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const modules = import.meta.glob('/src/content/issues/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.split('/').pop().split('.')[0] === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const issue = await match?.resolver?.();

	if (!issue) {
		throw error(404, 'Issue not found');
	}

	return {
		content: issue.default,
		meta: issue.metadata
	};
}
