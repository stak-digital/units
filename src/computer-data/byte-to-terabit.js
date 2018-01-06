/**
 * Converts Byte (B) to Terabit (Tbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte) {
	return byte / 125000000000;
}
