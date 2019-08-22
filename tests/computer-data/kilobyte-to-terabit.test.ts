import kilobyteToTerabit from '../../src/computer-data/kilobyte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToTerabit(1)
	).toBe(8e-9);

});
