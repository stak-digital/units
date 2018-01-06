import squareKilometersToSquareFeet from '../../src/area/square-kilometers-to-square-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareKilometersToSquareFeet
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareKilometersToSquareFeet(1)
	).toBe(10764000);

});
