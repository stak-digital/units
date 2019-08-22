import daysToNanoseconds from '../../src/time/days-to-nanoseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToNanoseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToNanoseconds(1)
	).toBe(86400000000000);

});
