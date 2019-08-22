import kilobyteToTerabyte from '../../src/computer-data/kilobyte-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToTerabyte(1)
	).toBe(1e-9);

});
