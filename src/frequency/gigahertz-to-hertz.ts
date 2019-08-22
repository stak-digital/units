/**
 * Converts Gigahertz (GHz) to Hertz (Hz)
 * @param {number} gigahertz
 * @returns {number}
 */
export default function(gigahertz : number) : number {
	return gigahertz * 10e9;
}
