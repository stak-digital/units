/**
 * Converts Celsius (C) to Rankine (R)
 * @param {number} celsius
 * @returns {number}
 */
export default function(celsius : number) : number {
	return (celsius + 273.15) * (9/5);
}
