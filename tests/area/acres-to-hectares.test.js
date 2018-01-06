import acresToHectares from '../../src/area/acres-to-hectares';
import expect from 'expect';

test('it should exist', () => {

	expect(
		acresToHectares
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		acresToHectares(1)
	).toBe(0.40467807858848287);

});
