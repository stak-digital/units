/**
 * Converts Gigabit (Gbit) to Byte (B)
 * @param {number} gigabit
 * @returns {number}
 */
export default function(gigabit : number) : number {
	return gigabit * 125000000;
}
