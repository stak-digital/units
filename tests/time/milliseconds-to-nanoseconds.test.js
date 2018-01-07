import millisecondsToNanoseconds from '../../src/time/milliseconds-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToNanoseconds(1)
	).toBe(1000000);

});
