/**
 * Converts Milliseconds (ms) to Microseconds (µs)
 * @param {number} milliseconds
 * @returns {number}
 */
export default function(milliseconds : number) : number {
	return milliseconds * 1e+3;
}
