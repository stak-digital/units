/**
 * Converts Petabit (Pbit) to Terabyte (TB)
 * @param {number} petabit
 * @returns {number}
 */
export default function(petabit : number) : number {
	return petabit * 1.25e2;
}
