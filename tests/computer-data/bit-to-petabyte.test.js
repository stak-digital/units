import bitToPetabyte from '../../src/computer-data/bit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToPetabyte(1)
	).toBe(1.25e-16);

});
