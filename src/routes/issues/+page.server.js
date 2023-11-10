export async function load() {
	const yearModules = import.meta.glob('/src/content/years/*.md');
	const issueModules = import.meta.glob('/src/content/issues/*.md');

	let issues = {};

	for (const path in issueModules) {
		const file = await issueModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		issues[slug] = { ...file.metadata };
	}

	let years = {};

	for (const path in yearModules) {
		const file = await yearModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		years[slug] = { ...file.metadata, issues: {} };
		for (const issue in issues) {
			if (issues[issue].year === years[slug].title) {
				years[slug].issues[issue] = issues[issue];
			}
		}
	}

	years = Object.keys(years)
		.sort()
		.reverse()
		.reduce((obj, key) => {
			obj[key] = years[key];
			return obj;
		}, {});

	return { years };
}
