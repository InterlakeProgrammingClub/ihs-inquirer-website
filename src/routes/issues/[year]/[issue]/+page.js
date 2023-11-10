import { error } from '@sveltejs/kit';
import { urlify } from '$lib/utils';

export async function load({ params }) {
	const modules = import.meta.glob('/src/content/issues/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.split('/').pop().split('.')[0] === params.year) {
			match = { path, resolver };
			break;
		}
	}

	const year = await match?.resolver?.();

	if (!year) {
		throw error(404, 'Issue not found');
	}

	let issue;

	for (const i of year.metadata.issues) {
		if (urlify(i) === params.issue) {
			issue = i;
			break;
		}
	}

	let meta = {
		year: issue.metadata.title,
		month: issue.metadata
	};

	return {
		content: issue.default,
		meta: issue.metadata
	};
}
