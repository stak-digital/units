import terabyteToKilobyte from '../../src/computer-data/terabyte-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToKilobyte(1)
	).toBe(1000000000);

});
