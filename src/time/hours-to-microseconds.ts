/**
 * Converts Hours (h) to Microseconds (µs)
 * @param {number} hours
 * @returns {number}
 */
export default function(hours : number) : number {
	return hours * 3.6e+9;
}
