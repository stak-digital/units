import kilobyteToGigabyte from '../../src/computer-data/kilobyte-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToGigabyte(1)
	).toBe(0.000001);

});
