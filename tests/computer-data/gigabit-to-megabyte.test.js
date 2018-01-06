import gigabitToMegabyte from '../../src/computer-data/gigabit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToMegabyte(1)
	).toBe(125);

});
