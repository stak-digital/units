import daysToHours from '../../src/time/days-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToHours(1)
	).toBe(24);

});
