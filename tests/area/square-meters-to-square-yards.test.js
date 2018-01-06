import squareMetersToSquareYards from '../../src/area/square-meters-to-square-yards';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareMetersToSquareYards
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareMetersToSquareYards(1)
	).toBe(1.19599);

});
