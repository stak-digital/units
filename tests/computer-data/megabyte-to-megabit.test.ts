import megabyteToMegabit from '../../src/computer-data/megabyte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToMegabit(1)
	).toBe(8);

});
