/**
 * Converts Nanoseconds (ns) to Minutes (min)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds) {
	return nanoseconds / 1e+9 / 60;
}
