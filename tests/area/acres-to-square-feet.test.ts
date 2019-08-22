import acresToSquareFeet from '../../src/area/acres-to-square-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		acresToSquareFeet
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		acresToSquareFeet(1)
	).toBe(43560);

});
