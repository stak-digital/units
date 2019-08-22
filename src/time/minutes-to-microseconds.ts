/**
 * Converts Minutes (min) to Microseconds (µs)
 * @param {number} minutes
 * @returns {number}
 */
export default function(minutes : number) : number {
	return minutes * 6e+7;
}
