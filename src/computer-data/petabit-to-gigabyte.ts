/**
 * Converts Petabit (Pbit) to Gigabyte (GB)
 * @param {number} petabit
 * @returns {number}
 */
export default function(petabit : number) : number {
	return petabit * 1.25e5;
}
