import nanosecondsToMinutes from '../../src/time/nanoseconds-to-minutes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToMinutes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToMinutes(1)
	).toBe(1.6666666666666667e-11);

});
