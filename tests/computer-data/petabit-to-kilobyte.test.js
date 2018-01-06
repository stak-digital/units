import petabitToKilobyte from '../../src/computer-data/petabit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToKilobyte(1)
	).toBe(125000000000);

});
