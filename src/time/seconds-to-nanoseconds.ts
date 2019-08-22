/**
 * Converts Seconds (s) to Nanoseconds (ns)
 * @param {number} seconds
 * @returns {number}
 */
export default function(seconds : number) : number {
	return seconds * 1e+9;
}
