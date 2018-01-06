import acresToSquareMeters from '../../src/area/acres-to-square-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		acresToSquareMeters
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		acresToSquareMeters(1)
	).toBe(4046.7807858848287);

});
