import squareKilometersToHectares from '../../src/area/square-kilometers-to-hectares';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareKilometersToHectares
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareKilometersToHectares(1)
	).toBe(100);

});
