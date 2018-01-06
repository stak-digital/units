import kilobitToTerabyte from '../../src/computer-data/kilobit-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToTerabyte(1)
	).toBe(1.25e-10);

});
