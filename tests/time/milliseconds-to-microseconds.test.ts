import millisecondsToMicroseconds from '../../src/time/milliseconds-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToMicroseconds(1)
	).toBe(1000);

});
