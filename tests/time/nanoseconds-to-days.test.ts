import nanosecondsToDays from '../../src/time/nanoseconds-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToDays(1)
	).toBe(1.1574074074074075e-14);

});
