import kilobitToMegabyte from '../../src/computer-data/kilobit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToMegabyte(1)
	).toBe(0.000125);

});
