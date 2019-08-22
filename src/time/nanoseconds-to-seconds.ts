/**
 * Converts Nanoseconds (ns) to Seconds (s)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds : number) : number {
	return nanoseconds / 1e+9;
}
