/**
 * Converts Byte (B) to Gigabit (Gbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte : number) : number {
	return byte / 125000000;
}
