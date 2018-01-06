/**
 * Converts Byte (B) to Gigabit (Gbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte) {
	return byte / 125000000;
}
