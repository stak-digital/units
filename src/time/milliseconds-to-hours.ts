/**
 * Converts Milliseconds (ms) to Hours (h)
 * @param {number} milliseconds
 * @returns {number}
 */
export default function(milliseconds : number) : number {
	return milliseconds / 1000 / 60 / 60;
}
