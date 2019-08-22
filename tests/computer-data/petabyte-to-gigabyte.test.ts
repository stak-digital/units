import petabyteToGigabyte from '../../src/computer-data/petabyte-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToGigabyte(1)
	).toBe(1000000);

});
