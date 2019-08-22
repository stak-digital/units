import rankineToFahrenheit from '../../src/temperature/rankine-to-fahrenheit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		rankineToFahrenheit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		rankineToFahrenheit(1)
	).toBe(-458.67);

});
