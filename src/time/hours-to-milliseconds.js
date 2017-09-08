import minutesToMilliseconds from './minutes-to-milliseconds';

/**
 * hoursToMilliseconds - Takes hours and returns the millisecond representation
 * @param {number} hours
 * @returns {number} milliseconds
 */
export default function (hours) {
	return minutesToMilliseconds(hours * 60);
}