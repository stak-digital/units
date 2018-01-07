import secondsToDays from '../../src/time/seconds-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToDays(1)
	).toBe(0.000011574074074074073);

});
