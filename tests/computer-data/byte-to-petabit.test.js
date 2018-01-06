import byteToPetabit from '../../src/computer-data/byte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToPetabit(1)
	).toBe(8e-15);

});
