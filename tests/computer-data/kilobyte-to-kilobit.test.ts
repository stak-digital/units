import kilobyteToKilobit from '../../src/computer-data/kilobyte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToKilobit(1)
	).toBe(8);

});
