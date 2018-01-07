import microsecondsToDays from '../../src/time/microseconds-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToDays(1)
	).toBe(1.1574074074074074e-11);

});
