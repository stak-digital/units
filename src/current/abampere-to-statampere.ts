/**
 * Converts Abampere (abA) to Statampere (statA)
 * @param {number} abampere
 * @returns {number}
 */
export default function(abampere : number) : number {
	return abampere / 3.335641E-11;
}
