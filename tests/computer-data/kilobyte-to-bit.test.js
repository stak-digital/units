import kilobyteToBit from '../../src/computer-data/kilobyte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToBit(1)
	).toBe(8000);

});
