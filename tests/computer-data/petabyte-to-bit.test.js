import petabyteToBit from '../../src/computer-data/petabyte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToBit(1)
	).toBe(8000000000000000);

});
