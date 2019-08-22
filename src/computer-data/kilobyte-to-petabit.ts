/**
 * Converts Kilobyte (kB) to Petabit (Pbit)
 * @param {number} kilobyte
 * @returns {number}
 */
export default function(kilobyte : number) : number {
	return kilobyte / 125000000000;
}
