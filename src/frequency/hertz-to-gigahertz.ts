/**
 * Converts Hertz (Hz) to Gigahertz (GHz)
 * @param {number} hertz
 * @returns {number}
 */
export default function(hertz : number) : number {
	return hertz / 1e9;
}
