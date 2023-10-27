import { error } from "@sveltejs/kit";
function nameFromPath(path) {
	return path.split('/').slice(-1)[0].split('.')[0]
}

export async function load({params}) {
    const modules = import.meta.glob("/src/issues/*.md");

    let match = {};

    for (const [path, resolver] of Object.entries(modules)) {
		if (nameFromPath(path) === params.slug) {
			match = { path, resolver }
			break
		}
	}

	const post = await match?.resolver?.()

	if (!post || !post.metadata.published) {
		throw error(404, 'Post not found')
	}

    return {
        content: post.default,
        meta: post.metadata
    }
}