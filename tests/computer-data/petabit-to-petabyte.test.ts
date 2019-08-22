import petabitToPetabyte from '../../src/computer-data/petabit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToPetabyte(1)
	).toBe(0.125);

});
