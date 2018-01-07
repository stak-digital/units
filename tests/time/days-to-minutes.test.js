import daysToMinutes from '../../src/time/days-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToMinutes(1)
	).toBe(1440);

});
