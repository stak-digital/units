/**
 * Converts Terabit (Tbit) to Kilobyte (kB)
 * @param {number} terabit
 * @returns {number}
 */
export default function(terabit : number) : number {
	return terabit * 125000000;
}
