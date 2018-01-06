import terabitToMegabit from '../../src/computer-data/terabit-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToMegabit(1)
	).toBe(1000000);

});
