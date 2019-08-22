/**
 * Converts Petabit (Pbit) to Kilobyte (kB)
 * @param {number} petabit
 * @returns {number}
 */
export default function(petabit : number) : number {
	return petabit * 1.25e11;
}
