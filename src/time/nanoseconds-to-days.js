/**
 * Converts Nanoseconds (ns) to Days (days)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds) {
	return nanoseconds / 1e+9 / 60 / 60 / 24;
}
