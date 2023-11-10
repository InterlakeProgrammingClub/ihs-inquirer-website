export function formatDate(date) {
    date += "T00:00:00";
	return new Date(date).toLocaleString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}