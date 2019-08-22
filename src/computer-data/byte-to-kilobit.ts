/**
 * Converts Byte (B) to Kilobit (kbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte : number) : number {
	return byte / 125;
}
