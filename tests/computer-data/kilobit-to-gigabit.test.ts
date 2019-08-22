import kilobitToGigabit from '../../src/computer-data/kilobit-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToGigabit(1)
	).toBe(0.000001);

});
