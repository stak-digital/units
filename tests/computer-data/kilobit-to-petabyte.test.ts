import kilobitToPetabyte from '../../src/computer-data/kilobit-to-petabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToPetabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToPetabyte(1)
	).toBe(1.25e-13);

});
