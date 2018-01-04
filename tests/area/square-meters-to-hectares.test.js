import squareMetersToHectares from '../../src/area/square-meters-to-hectares';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareMetersToHectares
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareMetersToHectares(1)
	).toBe(0.0001);

});	
