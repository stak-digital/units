import squareFeetToHectares from '../../src/area/square-feet-to-hectares';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareFeetToHectares
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareFeetToHectares(1)
	).toBe(0.00000929022668153103);

});
