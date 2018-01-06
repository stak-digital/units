import squareYardsToSquareMeters from '../../src/area/square-yards-to-square-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareYardsToSquareMeters
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareYardsToSquareMeters(1)
	).toBe(0.8361204013377926);

});
