/**
 * Converts Seconds (s) to Microseconds (µs)
 * @param {number} seconds
 * @returns {number}
 */
export default function(seconds : number) : number {
	return seconds * 1e+6;
}
