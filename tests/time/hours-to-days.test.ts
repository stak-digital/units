import hoursToDays from '../../src/time/hours-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToDays(1)
	).toBe(0.041666666666666664);

});
