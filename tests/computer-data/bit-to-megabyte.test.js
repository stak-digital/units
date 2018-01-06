import bitToMegabyte from '../../src/computer-data/bit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToMegabyte(1)
	).toBe(1.25e-7);

});
