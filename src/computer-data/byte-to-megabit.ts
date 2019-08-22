/**
 * Converts Byte (B) to Megabit (Mbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte : number) : number {
	return byte / 125000;
}
