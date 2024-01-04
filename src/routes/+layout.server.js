export const prerender = true;

export async function load() {
	// fetch url of latest issue
	const issueModules = import.meta.glob('/src/content/issues/*.md');

	let latestIssueSlug = '';
	let latestIssueYear = '';

	for (const path in issueModules) {
		const file = await issueModules[path]();
		const slug = path.split('/').pop().split('.')[0];
		if (file.metadata.year.localeCompare(latestIssueYear) > 0) {
			latestIssueSlug = slug;
			latestIssueYear = file.metadata.year;
		}
	}

	console.log(latestIssueSlug);

	return {
		latestIssueSlug: '/issues/' + latestIssueSlug
	};
}
