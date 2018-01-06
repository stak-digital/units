import kilobyteToMegabit from '../../src/computer-data/kilobyte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToMegabit(1)
	).toBe(0.008);

});
