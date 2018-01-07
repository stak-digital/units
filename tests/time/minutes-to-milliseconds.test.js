import minutesToMilliseconds from '../../src/time/minutes-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToMilliseconds(1)
	).toBe(60000);

});
