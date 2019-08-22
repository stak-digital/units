import kilobitToPetabit from '../../src/computer-data/kilobit-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToPetabit(1)
	).toBe(1e-12);

});
