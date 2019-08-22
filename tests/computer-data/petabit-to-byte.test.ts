import petabitToByte from '../../src/computer-data/petabit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabitToByte(1)
	).toBe(125000000000000);

});
