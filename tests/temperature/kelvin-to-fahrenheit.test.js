import kelvinToFahrenheit from '../../src/temperature/kelvin-to-fahrenheit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kelvinToFahrenheit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kelvinToFahrenheit(1)
	).toBe(-457.87);

});	
