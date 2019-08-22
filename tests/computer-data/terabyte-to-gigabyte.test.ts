import terabyteToGigabyte from '../../src/computer-data/terabyte-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToGigabyte(1)
	).toBe(1000);

});
