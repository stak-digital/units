import petabitToBit from '../../src/computer-data/petabit-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToBit(1)
	).toBe(1000000000000000);

});
