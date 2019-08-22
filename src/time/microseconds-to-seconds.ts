/**
 * Converts Microseconds (µs) to Seconds (s)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds : number) : number {
	return microseconds / 1e+6;
}
