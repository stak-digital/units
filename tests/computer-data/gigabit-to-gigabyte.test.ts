import gigabitToGigabyte from '../../src/computer-data/gigabit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToGigabyte(1)
	).toBe(0.125);

});
