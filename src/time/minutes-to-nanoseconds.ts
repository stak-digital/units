/**
 * Converts Minutes (min) to Nanoseconds (ns)
 * @param {number} minutes
 * @returns {number}
 */
export default function(minutes : number) : number {
	return minutes * 6e+10;
}
