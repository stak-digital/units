/**
 * Converts Microseconds (µs) to Nanoseconds (ns)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds : number) : number {
	return microseconds * 1e+3;
}
