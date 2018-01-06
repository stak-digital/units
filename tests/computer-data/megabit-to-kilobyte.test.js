import megabitToKilobyte from '../../src/computer-data/megabit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToKilobyte(1)
	).toBe(125);

});
