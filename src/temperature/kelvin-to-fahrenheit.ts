/**
 * Converts Kelvin (K) to Fahrenheit (F)
 * @param {number} kelvin
 * @returns {number}
 */
export default function(kelvin : number) : number {
	return (kelvin * (9/5)) - 459.67;
}
