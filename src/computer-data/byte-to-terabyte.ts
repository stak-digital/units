/**
 * Converts Byte (B) to Terabyte (TB)
 * @param {number} byte
 * @returns {number}
 */
export default function(byte : number) : number {
	return byte / 1000000000000;
}
