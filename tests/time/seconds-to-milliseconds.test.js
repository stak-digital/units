import secondsToMilliseconds from '../../src/time/seconds-to-milliseconds';
import expect from 'expect';

describe('secondsToMilliseconds', () => {

	test('it should exist', () => {

		expect(
			secondsToMilliseconds
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneHourInMilliseconds = 1000;

		expect(
			secondsToMilliseconds(1)
		).toBe(oneHourInMilliseconds);

		expect(
			secondsToMilliseconds(5)
		).toBe(oneHourInMilliseconds * 5);

		expect(
			secondsToMilliseconds(10)
		).toBe(oneHourInMilliseconds * 10);

	});

});