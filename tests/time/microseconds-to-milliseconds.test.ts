import microsecondsToMilliseconds from '../../src/time/microseconds-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToMilliseconds(1)
	).toBe(0.001);

});
