import millisecondsToMinutes from '../../src/time/milliseconds-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToMinutes(1)
	).toBe(0.000016666666666666667);

});
