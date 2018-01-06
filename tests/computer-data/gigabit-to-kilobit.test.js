import gigabitToKilobit from '../../src/computer-data/gigabit-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToKilobit(1)
	).toBe(1000000);

});
