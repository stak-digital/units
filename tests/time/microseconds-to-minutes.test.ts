import microsecondsToMinutes from '../../src/time/microseconds-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToMinutes(1)
	).toBe(1.6666666666666667e-8);

});
