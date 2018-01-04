/**
 * Converts Rankine (R) to Celsius (C)
 * @param {number} rankine
 * @returns {number}
 */
export default function(rankine) {
	return (rankine - 491.67) * (5/9);
}
