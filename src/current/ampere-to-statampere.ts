/**
 * Converts Ampere (A) to Statampere (statA)
 * @param {number} ampere
 * @returns {number}
 */
export default function(ampere : number) : number {
	return ampere / 3.335641E-10;
}
