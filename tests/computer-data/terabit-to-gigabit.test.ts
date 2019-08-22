import terabitToGigabit from '../../src/computer-data/terabit-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToGigabit(1)
	).toBe(1000);

});
