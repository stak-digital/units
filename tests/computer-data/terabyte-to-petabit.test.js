import terabyteToPetabit from '../../src/computer-data/terabyte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToPetabit(1)
	).toBe(0.008);

});
