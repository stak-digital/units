/**
 * Converts Square Meters (m²) to Hectares (ha)
 * @param {number} squareMeters
 * @returns {number}
 */
export default function(squareMeters : number) : number {
	return squareMeters / 10000;
}
