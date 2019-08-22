import megabitToTerabyte from '../../src/computer-data/megabit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToTerabyte(1)
	).toBe(1.25e-7);

});
