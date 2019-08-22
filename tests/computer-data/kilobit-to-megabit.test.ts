import kilobitToMegabit from '../../src/computer-data/kilobit-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToMegabit(1)
	).toBe(0.001);

});
