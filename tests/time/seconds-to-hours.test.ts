import secondsToHours from '../../src/time/seconds-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		secondsToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		secondsToHours(1)
	).toBe(0.0002777777777777778);

});
