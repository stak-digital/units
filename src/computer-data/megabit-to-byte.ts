/**
 * Converts Megabit (Mbit) to Byte (B)
 * @param {number} megabit
 * @returns {number}
 */
export default function(megabit : number) : number {
	return megabit * 125000;
}
