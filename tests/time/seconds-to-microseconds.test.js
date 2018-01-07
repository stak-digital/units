import secondsToMicroseconds from '../../src/time/seconds-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToMicroseconds(1)
	).toBe(1000000);

});
