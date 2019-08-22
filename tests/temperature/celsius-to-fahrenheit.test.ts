import celsiusToFahrenheit from '../../src/temperature/celsius-to-fahrenheit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		celsiusToFahrenheit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		celsiusToFahrenheit(1)
	).toBe(33.8);

});
