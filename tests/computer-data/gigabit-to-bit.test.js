import gigabitToBit from '../../src/computer-data/gigabit-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToBit(1)
	).toBe(1000000000);

});
