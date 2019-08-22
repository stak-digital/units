/**
 * Converts Nanoseconds (ns) to Microseconds (µs)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds : number) : number {
	return nanoseconds / 1e+3;
}
