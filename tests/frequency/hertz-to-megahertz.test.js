import hertzToMegahertz from '../../src/frequency/hertz-to-megahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hertzToMegahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hertzToMegahertz(1)
	).toBe(0.000001);

});
