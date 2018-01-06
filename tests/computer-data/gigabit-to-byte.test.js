import gigabitToByte from '../../src/computer-data/gigabit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabitToByte(1)
	).toBe(125000000);

});
