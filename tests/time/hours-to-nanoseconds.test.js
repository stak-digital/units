import hoursToNanoseconds from '../../src/time/hours-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToNanoseconds(1)
	).toBe(3600000000000);

});
