import megabitToByte from '../../src/computer-data/megabit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToByte(1)
	).toBe(125000);

});
