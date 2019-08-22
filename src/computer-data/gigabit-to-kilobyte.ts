/**
 * Converts Gigabit (Gbit) to Kilobyte (kB)
 * @param {number} gigabit
 * @returns {number}
 */
export default function(gigabit : number) : number {
	return gigabit * 125000;
}
