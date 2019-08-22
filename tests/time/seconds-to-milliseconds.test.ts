import secondsToMilliseconds from '../../src/time/seconds-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToMilliseconds(1)
	).toBe(1000);

});
