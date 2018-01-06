import terabitToTerabyte from '../../src/computer-data/terabit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToTerabyte(1)
	).toBe(0.125);

});
