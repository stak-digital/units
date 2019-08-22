import gigabyteToPetabyte from '../../src/computer-data/gigabyte-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToPetabyte(1)
	).toBe(0.000001);

});
