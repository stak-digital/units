import minutesToMicroseconds from '../../src/time/minutes-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToMicroseconds(1)
	).toBe(60000000);

});
