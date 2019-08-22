/**
 * Converts Petabyte (PB) to Kilobit (kbit)
 * @param {number} petabyte
 * @returns {number}
 */
export default function(petabyte : number) : number {
	return petabyte * 8e12;
}
