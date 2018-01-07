import secondsToMinutes from '../../src/time/seconds-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToMinutes(1)
	).toBe(0.016666666666666666);

});
