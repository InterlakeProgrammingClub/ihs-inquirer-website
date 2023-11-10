import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const yearModules = import.meta.glob('/src/content/years/*.md');
	const issueModules = import.meta.glob('/src/content/issues/*.md');

	let match = {};
	for (const [path, resolver] of Object.entries(yearModules)) {
		if (path.split('/').pop().split('.')[0] === params.year) {
			match = { path, resolver };
			break;
		}
	}
	const year = await match?.resolver?.();

	if (!year) {
		throw error(404, 'Issue not found');
	}

	match = {};
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

	issue.metadata.year = year.metadata;

	return {
		content: issue.default,
		issue: issue.metadata
	};
}
