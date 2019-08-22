import fahrenheitToKelvin from '../../src/temperature/fahrenheit-to-kelvin';
import expect from 'expect';

test('it should exist', () => {

	expect(
		fahrenheitToKelvin
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		fahrenheitToKelvin(1)
	).toBe(255.9277777777778);

});
