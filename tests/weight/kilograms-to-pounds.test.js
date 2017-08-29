import kilogramsToPounds from '../../src/weight/kilograms-to-pounds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilogramsToPounds
	).toExist();

});

test('it should return the correct values', () => {

	const oneKilogramToPounds = 2.20462;

	expect(
		kilogramsToPounds(1)
	).toBe(oneKilogramToPounds);

	expect(
		kilogramsToPounds(2)
	).toBe(oneKilogramToPounds * 2);

	expect(
		kilogramsToPounds(5)
	).toBe(oneKilogramToPounds * 5);

	expect(
		kilogramsToPounds(10)
	).toBe(oneKilogramToPounds * 10);

});