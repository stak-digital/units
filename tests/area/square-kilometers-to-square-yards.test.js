import squareKilometersToSquareYards from '../../src/area/square-kilometers-to-square-yards';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareKilometersToSquareYards
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareKilometersToSquareYards(1)
	).toBe(1195990);

});
