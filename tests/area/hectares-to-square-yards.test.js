import hectaresToSquareYards from '../../src/area/hectares-to-square-yards';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hectaresToSquareYards
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hectaresToSquareYards(1)
	).toBe(11959.9);

});
