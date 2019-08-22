import gigabitToPetabyte from '../../src/computer-data/gigabit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToPetabyte(1)
	).toBe(1.25e-7);

});
