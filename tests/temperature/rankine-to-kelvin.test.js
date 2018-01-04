import rankineToKelvin from '../../src/temperature/rankine-to-kelvin';
import expect from 'expect';

test('it should exist', () => {

	expect(
		rankineToKelvin
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		rankineToKelvin(1)
	).toBe(0.5555555555555556);

});	
