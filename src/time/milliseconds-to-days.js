/**
 * millisecondsToDays - Takes milliseconds and returns the day representation
 * @param {number} milliseconds
 * @returns {number} days
 */
export default function (milliseconds) {
	return milliseconds / 1000 / 60 / 60 / 24;
}