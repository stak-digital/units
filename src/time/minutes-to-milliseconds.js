import secondsToMilliseconds from './seconds-to-milliseconds';

/**
 * minutesToMilliseconds - Takes minutes and returns the millisecond representation
 * @param {number} minutes
 * @returns {number} milliseconds
 */
export default function (minutes) {
	return secondsToMilliseconds(minutes * 60);
}