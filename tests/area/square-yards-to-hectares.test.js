import squareYardsToHectares from '../../src/area/square-yards-to-hectares';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareYardsToHectares
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareYardsToHectares(1)
	).toBe(0.00008361274);

});
