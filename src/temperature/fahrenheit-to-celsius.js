/**
 * Converts Fahrenheit (F) to Celsius (C)
 * @param {number} fahrenheit
 * @returns {number}
 */
export default function(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}
