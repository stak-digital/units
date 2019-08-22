import bitToGigabyte from '../../src/computer-data/bit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToGigabyte(1)
	).toBe(1.25e-10);

});
