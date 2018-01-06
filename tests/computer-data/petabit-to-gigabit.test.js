import petabitToGigabit from '../../src/computer-data/petabit-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToGigabit(1)
	).toBe(1000000);

});
