import megabitToKilobit from '../../src/computer-data/megabit-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToKilobit(1)
	).toBe(1000);

});
