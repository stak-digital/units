import terabyteToMegabyte from '../../src/computer-data/terabyte-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToMegabyte(1)
	).toBe(1000000);

});
