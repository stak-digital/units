import terabyteToPetabyte from '../../src/computer-data/terabyte-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToPetabyte(1)
	).toBe(0.001);

});
