import minutesToDays from '../../src/time/minutes-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToDays(1)
	).toBe(0.0006944444444444445);

});
