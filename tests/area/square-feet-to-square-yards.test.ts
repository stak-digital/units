import squareFeetToSquareYards from '../../src/area/square-feet-to-square-yards';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareFeetToSquareYards
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareFeetToSquareYards(1)
	).toBe(0.1111111);

});
