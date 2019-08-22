/**
 * Converts Days (days) to Nanoseconds (ns)
 * @param {number} days
 * @returns {number}
 */
export default function(days : number) : number {
	return days * 8.64e+13;
}
