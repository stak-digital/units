import terabitToBit from '../../src/computer-data/terabit-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToBit(1)
	).toBe(1000000000000);

});
