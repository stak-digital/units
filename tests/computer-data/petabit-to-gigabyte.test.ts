import petabitToGigabyte from '../../src/computer-data/petabit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToGigabyte(1)
	).toBe(125000);

});
