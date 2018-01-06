/**
 * Converts Byte (B) to Kilobit (kbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte) {
	return byte / 125;
}
