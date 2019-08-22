import terabitToPetabit from '../../src/computer-data/terabit-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToPetabit(1)
	).toBe(0.001);

});
