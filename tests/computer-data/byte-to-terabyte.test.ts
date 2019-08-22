import byteToTerabyte from '../../src/computer-data/byte-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToTerabyte(1)
	).toBe(1e-12);

});
