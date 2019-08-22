/**
 * Converts Days (days) to Microseconds (µs)
 * @param {number} days
 * @returns {number}
 */
export default function(days : number) : number {
	return days * 8.64e+10;
}
