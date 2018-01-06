import squareMetersToSquareKilometers from '../../src/area/square-meters-to-square-kilometers';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareMetersToSquareKilometers
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareMetersToSquareKilometers(1)
	).toBe(0.000001);

});
