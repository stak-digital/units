import acresToSquareKilometers from '../../src/area/acres-to-square-kilometers';
import expect from 'expect';

test('it should exist', () => {

	expect(
		acresToSquareKilometers
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		acresToSquareKilometers(1)
	).toBe(0.004046780785884828);

});
