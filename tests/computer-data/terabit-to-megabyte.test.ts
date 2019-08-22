import terabitToMegabyte from '../../src/computer-data/terabit-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToMegabyte(1)
	).toBe(125000);

});
