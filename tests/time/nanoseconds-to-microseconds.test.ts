import nanosecondsToMicroseconds from '../../src/time/nanoseconds-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		nanosecondsToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		nanosecondsToMicroseconds(1)
	).toBe(0.001);

});
