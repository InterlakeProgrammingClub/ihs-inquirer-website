export async function load() {
	const modules = import.meta.glob('/src/content/bios/*.md');

	let bios = [];

	for (const path in modules) {
		const file = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		bios.push({ ...file.metadata, slug: slug });
	}

	let staff = bios.filter((item) => item.category === 'Staff');

	staff.sort((a, b) => {
		if (a.order != b.order) {
			return a.order > b.order ? 1 : -1;
		} else {
			return a.title.localeCompare(b.title);
		}
	});

	let contributors = bios.filter((item) => item.category === 'Contributor');

	const articleModules = import.meta.glob('/src/content/articles/*.md');

	for (const path in articleModules) {
		const post = await articleModules[path]();
		for (const author of post.metadata.authors) {
			if (
				!contributors.some((item) => item.title === author.title) &&
				!staff.some((item) => item.title === author.title)
			)
				contributors.push({ title: author.title });
		}
	}

	console.log(contributors);

	contributors.sort((a, b) => {
		if (a.order != b.order) {
			return a.order > b.order ? 1 : -1;
		} else {
			return a.title.localeCompare(b.title);
		}
	});

	console.log(contributors);

	return { staff, contributors };
}
