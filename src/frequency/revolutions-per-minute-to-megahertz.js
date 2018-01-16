/**
 * Converts Revolutions Per Minute (rpm) to Megahertz (MHz)
 * @param {number} revolutionsPerMinute
 * @returns {number}
 */
export default function(revolutionsPerMinute) {
	return revolutionsPerMinute / 60000000;
}
