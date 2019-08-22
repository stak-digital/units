/**
 * Converts Kilobyte (kB) to Megabit (Mbit)
 * @param {number} kilobyte
 * @returns {number}
 */
export default function(kilobyte : number) : number {
	return kilobyte / 125;
}
