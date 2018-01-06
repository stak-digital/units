import kilobyteToGigabit from '../../src/computer-data/kilobyte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToGigabit(1)
	).toBe(0.000008);

});
