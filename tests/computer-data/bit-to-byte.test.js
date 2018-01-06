import bitToByte from '../../src/computer-data/bit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToByte(1)
	).toBe(0.125);

});
