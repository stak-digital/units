import megabitToGigabit from '../../src/computer-data/megabit-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToGigabit(1)
	).toBe(0.001);

});
