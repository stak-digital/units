import daysToMicroseconds from '../../src/time/days-to-microseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToMicroseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToMicroseconds(1)
	).toBe(86400000000);

});
