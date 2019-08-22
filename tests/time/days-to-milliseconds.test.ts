import daysToMilliseconds from '../../src/time/days-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		daysToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		daysToMilliseconds(1)
	).toBe(86400000);

});
