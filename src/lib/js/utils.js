export function urlify(str) {
	return encodeURIComponent(str.replaceAll(' ', '-').toLowerCase());
}
