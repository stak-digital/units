import squareFeetToAcres from '../../src/area/square-feet-to-acres';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareFeetToAcres
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareFeetToAcres(1)
	).toBe(0.000022957);

});
