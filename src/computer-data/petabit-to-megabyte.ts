/**
 * Converts Petabit (Pbit) to Megabyte (MB)
 * @param {number} petabit
 * @returns {number}
 */
export default function(petabit : number) : number {
	return petabit * 1.25e8;
}
