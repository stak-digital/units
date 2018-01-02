import fahrenheitToCelsius from '../../src/temperature/fahrenheit-to-celsius';
import expect from 'expect';

test('it should exist', () => {

	expect(
		fahrenheitToCelsius
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		fahrenheitToCelsius(1)
	).toBe(-17.22222222222222);

});	
