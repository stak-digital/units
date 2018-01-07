import hoursToMilliseconds from '../../src/time/hours-to-milliseconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hoursToMilliseconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hoursToMilliseconds(1)
	).toBe(3600000);

});
