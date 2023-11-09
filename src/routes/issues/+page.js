export async function load() {
	const modules = import.meta.glob('/src/content/issues/*.md');

	let issues = {};

	for (const path in modules) {
		const post = await modules[path]();
		const slug = path.split('/').pop().split('.')[0];
		issues[slug] = { ...post.metadata };
	}

	let years = {};

	for (let issue in issues) {
		let year = issues[issue].year;
		if (!years[year]) {
			years[year] = { issues: {}, name: issues[issue].year_name };
		}
		years[year].issues[issue] = issues[issue];
	}

	return { years };
}
