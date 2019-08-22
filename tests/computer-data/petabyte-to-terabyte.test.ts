import petabyteToTerabyte from '../../src/computer-data/petabyte-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToTerabyte(1)
	).toBe(1000);

});
