import kilogramsToStones from '../../src/weight/kilograms-to-stones';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilogramsToStones
	).toExist();

});

test('it should return the correct values', () => {

	const oneKilogramToStones = 0.157473;

	expect(
		kilogramsToStones(1)
	).toBe(oneKilogramToStones);

	expect(
		kilogramsToStones(2)
	).toBe(oneKilogramToStones * 2);

	expect(
		kilogramsToStones(5)
	).toBe(oneKilogramToStones * 5);

	expect(
		kilogramsToStones(10)
	).toBe(oneKilogramToStones * 10);

});