import minutesToHours from '../../src/time/minutes-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToHours(1)
	).toBe(0.016666666666666666);

});
