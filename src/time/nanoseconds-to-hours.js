/**
 * Converts Nanoseconds (ns) to Hours (h)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds) {
	return nanoseconds / 1e+9 / 60 / 60;
}
