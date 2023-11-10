import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const issueModules = import.meta.glob('/src/content/issues/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(issueModules)) {
		if (path.split('/').pop().split('.')[0] === params.issue) {
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
		issue: issue.metadata
	};
}
