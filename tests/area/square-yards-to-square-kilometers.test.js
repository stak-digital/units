import squareYardsToSquareKilometers from '../../src/area/square-yards-to-square-kilometers';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareYardsToSquareKilometers
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareYardsToSquareKilometers(1)
	).toBe(8.361204013377926e-7);

});
