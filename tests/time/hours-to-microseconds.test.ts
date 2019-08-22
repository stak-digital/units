import hoursToMicroseconds from '../../src/time/hours-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToMicroseconds(1)
	).toBe(3600000000);

});
