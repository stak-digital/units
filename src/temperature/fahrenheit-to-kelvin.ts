/**
 * Converts Fahrenheit (F) to Kelvin (K)
 * @param {number} fahrenheit
 * @returns {number}
 */
export default function(fahrenheit : number) : number {
	return (fahrenheit + 459.67) * (5/9);
}
