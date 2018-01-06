import gigabitToPetabit from '../../src/computer-data/gigabit-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToPetabit(1)
	).toBe(0.000001);

});
