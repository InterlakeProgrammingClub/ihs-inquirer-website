import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const modules = import.meta.glob('/src/content/articles/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(modules)) {
		console.log(path);
		if (path.split('/').pop().split('.')[0] === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404, 'Post not found');
	}

	return {
		content: post.default,
		meta: post.metadata
	};
}
