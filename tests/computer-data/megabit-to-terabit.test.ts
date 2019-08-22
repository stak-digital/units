import megabitToTerabit from '../../src/computer-data/megabit-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToTerabit(1)
	).toBe(0.000001);

});
