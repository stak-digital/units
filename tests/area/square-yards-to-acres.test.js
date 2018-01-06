import squareYardsToAcres from '../../src/area/square-yards-to-acres';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareYardsToAcres
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareYardsToAcres(1)
	).toBe(0.0002066116);

});
