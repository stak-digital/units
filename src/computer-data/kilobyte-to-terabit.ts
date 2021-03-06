/**
 * Converts Kilobyte (kB) to Terabit (Tbit)
 * @param {number} kilobyte
 * @returns {number}
 */
export default function(kilobyte : number) : number {
	return kilobyte / 125000000;
}
