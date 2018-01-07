import microsecondsToHours from '../../src/time/microseconds-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		microsecondsToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		microsecondsToHours(1)
	).toBe(2.7777777777777777e-10);

});
