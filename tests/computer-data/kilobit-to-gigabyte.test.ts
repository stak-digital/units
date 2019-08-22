import kilobitToGigabyte from '../../src/computer-data/kilobit-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToGigabyte(1)
	).toBe(1.25e-7);

});
