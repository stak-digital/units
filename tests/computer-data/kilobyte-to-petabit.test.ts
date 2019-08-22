import kilobyteToPetabit from '../../src/computer-data/kilobyte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToPetabit(1)
	).toBe(8e-12);

});
