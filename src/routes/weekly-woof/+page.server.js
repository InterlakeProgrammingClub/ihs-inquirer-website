import { getDate } from '$lib/js/utils.js';

export async function load() {
	const modules = import.meta.glob('/src/content/woofs/*.md');

	let woofs = [];

	for (const path in modules) {
		const file = await modules[path]();
		// const slug = path.split('/').pop().split('.')[0];
		woofs.push({ ...file.metadata });
	}

	woofs.sort((a, b) => {
		return getDate(a.title) > getDate(b.title) ? -1 : 1;
	});

	return { woofs };
}
