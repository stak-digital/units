import byteToKilobit from '../../src/computer-data/byte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToKilobit(1)
	).toBe(0.008);

});
