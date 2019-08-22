import petabitToMegabyte from '../../src/computer-data/petabit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToMegabyte(1)
	).toBe(125000000);

});
