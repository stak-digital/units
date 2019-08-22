/**
 * Converts Kilopond (kp) to Pound Force (lbf)
 * @param {number} kilopond
 * @returns {number}
 */
export default function(kilopond : number) : number {
	return kilopond / 0.45359236844386;
}
