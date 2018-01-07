import microsecondsToNanoseconds from '../../src/time/microseconds-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToNanoseconds(1)
	).toBe(1000);

});
