import daysToMilliseconds from '../../src/time/days-to-milliseconds';
import expect from 'expect';

describe('daysToMilliseconds', () => {

	test('it should exist', () => {

		expect(
			daysToMilliseconds
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneDayInMilliseconds = 86400000;

		expect(
			daysToMilliseconds(1)
		).toBe(oneDayInMilliseconds);

		expect(
			daysToMilliseconds(5)
		).toBe(oneDayInMilliseconds * 5);

		expect(
			daysToMilliseconds(10)
		).toBe(oneDayInMilliseconds * 10);

	});

});