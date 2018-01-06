import squareKilometersToAcres from '../../src/area/square-kilometers-to-acres';
import expect from 'expect';

test('it should exist', () => {

	expect(
		squareKilometersToAcres
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		squareKilometersToAcres(1)
	).toBe(247.11);

});
