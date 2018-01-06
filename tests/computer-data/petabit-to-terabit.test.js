import petabitToTerabit from '../../src/computer-data/petabit-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToTerabit(1)
	).toBe(1000);

});
