import millisecondsToHours from '../../src/time/milliseconds-to-hours';
import expect from 'expect';

describe('millisecondsToHours', () => {

	test('it should exist', () => {

		expect(
			millisecondsToHours
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneHourInMilliseconds = 3600000;

		expect(
			millisecondsToHours(oneHourInMilliseconds)
		).toBe(1);

		expect(
			millisecondsToHours(oneHourInMilliseconds * 5)
		).toBe(5);

		expect(
			millisecondsToHours(oneHourInMilliseconds * 10)
		).toBe(10);

	});

});