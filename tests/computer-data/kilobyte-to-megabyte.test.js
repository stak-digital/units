import kilobyteToMegabyte from '../../src/computer-data/kilobyte-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToMegabyte(1)
	).toBe(0.001);

});
