import megabyteToPetabyte from '../../src/computer-data/megabyte-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToPetabyte(1)
	).toBe(1e-9);

});
