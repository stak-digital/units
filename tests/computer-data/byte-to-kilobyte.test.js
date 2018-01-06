import byteToKilobyte from '../../src/computer-data/byte-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToKilobyte(1)
	).toBe(0.001);

});
