/**
 * Converts Statampere (statA) to Abampere (abA)
 * @param {number} statampere
 * @returns {number}
 */
export default function(statampere : number) : number {
	return statampere / 29979245368.431;
}
