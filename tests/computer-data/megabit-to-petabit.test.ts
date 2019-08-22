import megabitToPetabit from '../../src/computer-data/megabit-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToPetabit(1)
	).toBe(1e-9);

});
