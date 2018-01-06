import petabitToTerabyte from '../../src/computer-data/petabit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToTerabyte(1)
	).toBe(125);

});
