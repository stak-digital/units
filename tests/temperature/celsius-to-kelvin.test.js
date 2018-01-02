import celsiusToKelvin from '../../src/temperature/celsius-to-kelvin';
import expect from 'expect';

test('it should exist', () => {

	expect(
		celsiusToKelvin
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		celsiusToKelvin(1)
	).toBe(274.15);

});	
