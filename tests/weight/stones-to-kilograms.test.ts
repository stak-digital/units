import stonesToKilograms from '../../src/weight/stones-to-kilograms';
import expect from 'expect';

test('it should exist', () => {

	expect(
		stonesToKilograms
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		stonesToKilograms(1)
	).toBe(6.35029);

});
