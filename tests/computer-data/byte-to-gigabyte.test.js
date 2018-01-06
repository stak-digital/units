import byteToGigabyte from '../../src/computer-data/byte-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToGigabyte(1)
	).toBe(1e-9);

});
