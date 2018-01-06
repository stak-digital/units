import bitToMegabit from '../../src/computer-data/bit-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToMegabit(1)
	).toBe(0.000001);

});
