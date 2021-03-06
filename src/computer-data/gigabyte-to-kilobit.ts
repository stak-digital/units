/**
 * Converts Gigabyte (GB) to Kilobit (kbit)
 * @param {number} gigabyte
 * @returns {number}
 */
export default function(gigabyte : number) : number {
	return gigabyte * 8000000;
}
