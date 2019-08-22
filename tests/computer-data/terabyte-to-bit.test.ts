import terabyteToBit from '../../src/computer-data/terabyte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToBit(1)
	).toBe(8000000000);

});
