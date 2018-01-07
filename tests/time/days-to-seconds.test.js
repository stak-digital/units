import daysToSeconds from '../../src/time/days-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToSeconds(1)
	).toBe(86400);

});
