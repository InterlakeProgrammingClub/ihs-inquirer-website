import { json } from '@sveltejs/kit';
import struct from '/src/bio/struct.json';

async function getPosts() {
	const modules = import.meta.glob('/src/articles/*.md');

	const temp = JSON.stringify(struct.issues);
	let posts = JSON.parse(temp);

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		const thing =
			posts[post.metadata.year?.toLowerCase()].quarters[post.metadata.quarter?.toLowerCase()]
				.articles;
		thing?.push({ ...post.metadata, slug });
	}

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
