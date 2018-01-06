import gigabyteToBit from '../../src/computer-data/gigabyte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToBit(1)
	).toBe(8000000000);

});
