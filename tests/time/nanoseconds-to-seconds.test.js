import nanosecondsToSeconds from '../../src/time/nanoseconds-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToSeconds(1)
	).toBe(1e-9);

});
