/**
 * Converts Byte (B) to Petabit (Pbit)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte : number) : number {
	return byte / 125000000000000;
}
