import kilobitToBit from '../../src/computer-data/kilobit-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToBit(1)
	).toBe(1000);

});
