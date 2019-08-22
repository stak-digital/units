import gigabitToTerabyte from '../../src/computer-data/gigabit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToTerabyte(1)
	).toBe(0.000125);

});
