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

export function getDate(title) {
	const month = title.split('-')[0].split(' ')[0];
	const day = title.split('-')[0].split(' ')[1];
	const year = title.slice(-4);
	return new Date(`${month} ${day}, ${year}`);
}
