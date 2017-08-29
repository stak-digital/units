import poundsToKilograms from '../../src/weight/pounds-to-kilograms';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundsToKilograms
	).toExist();

});

test('it should return the correct values', () => {

	const onePoundToKilogram = 0.453592;

	expect(
		poundsToKilograms(1)
	).toBe(onePoundToKilogram);

	expect(
		poundsToKilograms(2)
	).toBe(onePoundToKilogram * 2);

	expect(
		poundsToKilograms(5)
	).toBe(onePoundToKilogram * 5);

	expect(
		poundsToKilograms(10)
	).toBe(onePoundToKilogram * 10);

});