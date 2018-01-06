import bitToPetabit from '../../src/computer-data/bit-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToPetabit(1)
	).toBe(1e-15);

});
