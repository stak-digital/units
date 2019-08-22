import squareYardsToSquareFeet from '../../src/area/square-yards-to-square-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareYardsToSquareFeet
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareYardsToSquareFeet(1)
	).toBe(9);

});
