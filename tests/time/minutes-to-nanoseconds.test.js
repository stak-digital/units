import minutesToNanoseconds from '../../src/time/minutes-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToNanoseconds(1)
	).toBe(60000000000);

});
