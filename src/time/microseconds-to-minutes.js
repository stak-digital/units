/**
 * Converts Microseconds (µs) to Minutes (min)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds) {
	return microseconds / 1000 / 1000 / 60;
}
