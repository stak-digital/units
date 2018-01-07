import millisecondsToHours from '../../src/time/milliseconds-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToHours(1)
	).toBe(2.777777777777778e-7);

});
