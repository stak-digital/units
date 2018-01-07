import microsecondsToSeconds from '../../src/time/microseconds-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToSeconds(1)
	).toBe(0.000001);

});
