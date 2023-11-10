export async function load() {
	const modules = import.meta.glob('/src/content/bios/*.md');

	let bios = {};

	for (const path in modules) {
		const file = await modules[path]();
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

	console.log(bios);

	return { bios };
}
