import acresToSquareYards from '../../src/area/acres-to-square-yards';
import expect from 'expect';

test('it should exist', () => {

	expect(
		acresToSquareYards
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		acresToSquareYards(1)
	).toBe(4046.7807858848287);

});
