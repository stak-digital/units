/**
 * Converts Petabyte (PB) to Bit (bit)
 * @param {number} petabyte
 * @returns {number}
 */
export default function(petabyte : number) : number {
	return petabyte * 8e15;
}
