import tonnesToKilograms from '../../src/weight/tonnes-to-kilograms';
import expect from 'expect';

test('it should exist', () => {

	expect(
		tonnesToKilograms
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		tonnesToKilograms(1)
	).toBe(1000);

});
