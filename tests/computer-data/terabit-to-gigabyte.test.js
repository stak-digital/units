import terabitToGigabyte from '../../src/computer-data/terabit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToGigabyte(1)
	).toBe(125);

});
