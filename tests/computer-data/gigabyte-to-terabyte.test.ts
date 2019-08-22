import gigabyteToTerabyte from '../../src/computer-data/gigabyte-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToTerabyte(1)
	).toBe(0.001);

});
