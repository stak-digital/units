import nanosecondsToHours from '../../src/time/nanoseconds-to-hours';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToHours
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToHours(1)
	).toBe(2.777777777777778e-13);

});
