import rankineToCelsius from '../../src/temperature/rankine-to-celsius';
import expect from 'expect';

test('it should exist', () => {

	expect(
		rankineToCelsius
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		rankineToCelsius(1)
	).toBe(-272.5944444444445);

});
