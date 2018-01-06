import byteToMegabyte from '../../src/computer-data/byte-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToMegabyte(1)
	).toBe(0.000001);

});
