/**
 * Converts Microseconds (µs) to Hours (h)
 * @param {number} microseconds
 * @returns {number}
 */
export default function(microseconds : number) : number {
	return microseconds / 1000 / 1000 / 60 / 60;
}
