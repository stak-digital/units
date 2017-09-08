import hoursToMilliseconds from '../../src/time/hours-to-milliseconds';
import expect from 'expect';

describe('hoursToMilliseconds', () => {

	test('it should exist', () => {

		expect(
			hoursToMilliseconds
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneHourInMilliseconds = 3600000;

		expect(
			hoursToMilliseconds(1)
		).toBe(oneHourInMilliseconds);

		expect(
			hoursToMilliseconds(5)
		).toBe(oneHourInMilliseconds * 5);

		expect(
			hoursToMilliseconds(10)
		).toBe(oneHourInMilliseconds * 10);

	});

});