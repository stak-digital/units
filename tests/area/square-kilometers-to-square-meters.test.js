import squareKilometersToSquareMeters from '../../src/area/square-kilometers-to-square-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareKilometersToSquareMeters
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareKilometersToSquareMeters(1)
	).toBe(1000000);

});	
