import megabitToBit from '../../src/computer-data/megabit-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToBit(1)
	).toBe(1000000);

});
