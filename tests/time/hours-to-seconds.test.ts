import hoursToSeconds from '../../src/time/hours-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToSeconds(1)
	).toBe(3600);

});
