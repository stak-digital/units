/**
 * Converts Revolutions Per Minute (rpm) to Kilohertz (kHz)
 * @param {number} revolutionsPerMinute
 * @returns {number}
 */
export default function(revolutionsPerMinute) {
	return revolutionsPerMinute / 60000;
}
