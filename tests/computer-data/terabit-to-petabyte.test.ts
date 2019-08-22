import terabitToPetabyte from '../../src/computer-data/terabit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToPetabyte(1)
	).toBe(0.000125);

});
