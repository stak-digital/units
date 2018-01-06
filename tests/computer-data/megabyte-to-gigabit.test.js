import megabyteToGigabit from '../../src/computer-data/megabyte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToGigabit(1)
	).toBe(0.008);

});
