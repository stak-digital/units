import gigabitToTerabit from '../../src/computer-data/gigabit-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToTerabit(1)
	).toBe(0.001);

});
