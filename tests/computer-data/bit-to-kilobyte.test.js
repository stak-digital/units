import bitToKilobyte from '../../src/computer-data/bit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToKilobyte(1)
	).toBe(0.000125);

});
