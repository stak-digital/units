import petabitToKilobit from '../../src/computer-data/petabit-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToKilobit(1)
	).toBe(1000000000000);

});
