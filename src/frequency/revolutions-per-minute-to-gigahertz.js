/**
 * Converts Revolutions Per Minute (rpm) to Gigahertz (GHz)
 * @param {number} revolutionsPerMinute
 * @returns {number}
 */
export default function(revolutionsPerMinute) {
	return revolutionsPerMinute / 60000000000;
}
