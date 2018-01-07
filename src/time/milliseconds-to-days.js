/**
 * Converts Milliseconds (ms) to Days (days)
 * @param {number} milliseconds
 * @returns {number}
 */
export default function(milliseconds) {
	return milliseconds / 1000 / 60 / 60 / 24;
}
