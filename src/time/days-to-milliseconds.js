import hoursToMilliseconds from './hours-to-milliseconds';

/**
 * daysToMilliseconds - Takes days and returns the millisecond representation
 * @param {number} days
 * @returns {number} milliseconds
 */
export default function(days) {
	return hoursToMilliseconds(days * 24);
}