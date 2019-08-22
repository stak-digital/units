import bitToKilobit from '../../src/computer-data/bit-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToKilobit(1)
	).toBe(0.001);

});
