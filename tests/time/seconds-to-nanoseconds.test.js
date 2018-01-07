import secondsToNanoseconds from '../../src/time/seconds-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToNanoseconds(1)
	).toBe(1000000000);

});
