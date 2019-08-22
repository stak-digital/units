/**
 * Converts Microseconds (µs) to Days (days)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds : number) : number {
	return microseconds / 1000 / 1000 / 60 / 60 / 24;
}
