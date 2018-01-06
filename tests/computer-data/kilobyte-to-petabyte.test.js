import kilobyteToPetabyte from '../../src/computer-data/kilobyte-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToPetabyte(1)
	).toBe(1e-12);

});
