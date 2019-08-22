import bitToTerabyte from '../../src/computer-data/bit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToTerabyte(1)
	).toBe(1.25e-13);

});
