/**
 * Converts Revolutions Per Minute (rpm) to Kilohertz (kHz)
 * @param {number} revolutionsPerMinute
 * @returns {number}
 */
export default function(revolutionsPerMinute : number) : number {
	return revolutionsPerMinute / 60000;
}
