/**
 * Converts Nanoseconds (ns) to Minutes (min)
 * @param {number} nanoseconds
 * @returns {number}
 */
export default function(nanoseconds : number) : number {
	return nanoseconds / 1e+9 / 60;
}
