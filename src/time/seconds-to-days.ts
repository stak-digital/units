/**
 * Converts Seconds (s) to Days (days)
 * @param {number} seconds
 * @returns {number}
 */
export default function(seconds : number) : number {
	return seconds / 60 / 60 / 24;
}
