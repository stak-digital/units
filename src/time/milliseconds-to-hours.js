/**
 * millisecondsToHours - Takes milliseconds and returns the hour representation
 * @param {number} milliseconds
 * @returns {number} hours
 */
export default function (milliseconds) {
	return milliseconds / 1000 / 60 / 60;
}