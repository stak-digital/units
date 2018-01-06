import megabitToMegabyte from '../../src/computer-data/megabit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToMegabyte(1)
	).toBe(0.125);

});
