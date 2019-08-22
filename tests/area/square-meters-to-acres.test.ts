import squareMetersToAcres from '../../src/area/square-meters-to-acres';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareMetersToAcres
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareMetersToAcres(1)
	).toBe(0.00024711);

});
