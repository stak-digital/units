import hectaresToSquareMeters from '../../src/area/hectares-to-square-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hectaresToSquareMeters
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hectaresToSquareMeters(1)
	).toBe(10000);

});
