import nanosecondsToMilliseconds from '../../src/time/nanoseconds-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToMilliseconds(1)
	).toBe(0.000001);

});
