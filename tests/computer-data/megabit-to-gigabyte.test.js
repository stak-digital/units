import megabitToGigabyte from '../../src/computer-data/megabit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabitToGigabyte(1)
	).toBe(0.000125);

});
