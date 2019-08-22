import kelvinToCelsius from '../../src/temperature/kelvin-to-celsius';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kelvinToCelsius
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kelvinToCelsius(1)
	).toBe(-272.15);

});
