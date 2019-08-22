/**
 * Converts Nanoseconds (ns) to Milliseconds (ms)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds : number) : number {
	return nanoseconds / 1e+6;
}
