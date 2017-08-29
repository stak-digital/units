import stonesToKilograms from '../../src/weight/stones-to-kilograms';
import expect from 'expect';

test('it should exist', () => {

	expect(
		stonesToKilograms
	).toExist();

});

test('it should return the correct values', () => {

	const oneKilogramToStones = 6.35029;

	expect(
		stonesToKilograms(1)
	).toBe(oneKilogramToStones);

	expect(
		stonesToKilograms(2)
	).toBe(oneKilogramToStones * 2);

	expect(
		stonesToKilograms(5)
	).toBe(oneKilogramToStones * 5);

	expect(
		stonesToKilograms(10)
	).toBe(oneKilogramToStones * 10);

});