import gigabitToKilobyte from '../../src/computer-data/gigabit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToKilobyte(1)
	).toBe(125000);

});
