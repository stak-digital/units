import byteToPetabyte from '../../src/computer-data/byte-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToPetabyte(1)
	).toBe(1e-15);

});
