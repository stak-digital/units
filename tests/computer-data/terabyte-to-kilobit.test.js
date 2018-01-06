import terabyteToKilobit from '../../src/computer-data/terabyte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToKilobit(1)
	).toBe(8000000000);

});
