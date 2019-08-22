/**
 * Converts Terabit (Tbit) to Byte (B)
 * @param {number} terabit
 * @returns {number}
 */
export default function(terabit : number) : number {
	return terabit * 125000000000;
}
