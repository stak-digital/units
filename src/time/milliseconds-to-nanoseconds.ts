/**
 * Converts Milliseconds (ms) to Nanoseconds (ns)
 * @param {number} milliseconds
 * @returns {number}
 */
export default function(milliseconds : number) : number {
	return milliseconds * 1e+6;
}
