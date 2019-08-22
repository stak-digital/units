import bitToGigabit from '../../src/computer-data/bit-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToGigabit(1)
	).toBe(1e-9);

});
