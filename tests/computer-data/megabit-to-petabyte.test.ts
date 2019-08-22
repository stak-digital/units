import megabitToPetabyte from '../../src/computer-data/megabit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToPetabyte(1)
	).toBe(1.25e-10);

});
