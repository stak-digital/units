import squareMetersToSquareFeet from '../../src/area/square-meters-to-square-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareMetersToSquareFeet
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareMetersToSquareFeet(1)
	).toBe(10.7639);

});	
