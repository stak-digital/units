import gigabitToMegabit from '../../src/computer-data/gigabit-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToMegabit(1)
	).toBe(1000);

});
