import hectaresToSquareKilometers from '../../src/area/hectares-to-square-kilometers';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hectaresToSquareKilometers
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hectaresToSquareKilometers(1)
	).toBe(0.01);

});
