import hertzToGigahertz from '../../src/frequency/hertz-to-gigahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hertzToGigahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hertzToGigahertz(1)
	).toBe(1e-9);

});
