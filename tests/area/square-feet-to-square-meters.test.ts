import squareFeetToSquareMeters from '../../src/area/square-feet-to-square-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareFeetToSquareMeters
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareFeetToSquareMeters(1)
	).toBe(0.09290312990644656);

});
