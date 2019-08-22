import petabitToMegabit from '../../src/computer-data/petabit-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToMegabit(1)
	).toBe(1000000000);

});
