import squareFeetToSquareKilometers from '../../src/area/square-feet-to-square-kilometers';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareFeetToSquareKilometers
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareFeetToSquareKilometers(1)
	).toBe(9.29022668153103e-8);

});
