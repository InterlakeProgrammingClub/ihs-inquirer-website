export function urlify(str) {
	return encodeURIComponent(str.replaceAll(' ', '-').toLowerCase());
}

export function formatDate(date) {
	let d = new Date(date);
	return d.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
