import hoursToMinutes from '../../src/time/hours-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToMinutes(1)
	).toBe(60);

});
