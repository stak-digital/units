/**
 * Converts Petabit (Pbit) to Byte (B)
 * @param {number} petabit
 * @returns {number}
 */
export default function(petabit : number) : number {
	return petabit * 1.25e14;
}
