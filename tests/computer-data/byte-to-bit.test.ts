import byteToBit from '../../src/computer-data/byte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToBit(1)
	).toBe(8);

});
