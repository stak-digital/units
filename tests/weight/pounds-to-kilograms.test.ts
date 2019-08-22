import poundsToKilograms from '../../src/weight/pounds-to-kilograms';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundsToKilograms
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundsToKilograms(1)
	).toBe(0.453592);

});
