import hectaresToSquareFeet from '../../src/area/hectares-to-square-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hectaresToSquareFeet
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hectaresToSquareFeet(1)
	).toBe(107640);

});	
