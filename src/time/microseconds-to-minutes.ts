/**
 * Converts Microseconds (µs) to Minutes (min)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds : number) : number {
	return microseconds / 1000 / 1000 / 60;
}
