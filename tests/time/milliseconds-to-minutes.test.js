import millisecondsToMinutes from '../../src/time/milliseconds-to-minutes';
import expect from 'expect';

describe('millisecondsToMinutes', () => {

	test('it should exist', () => {

		expect(
			millisecondsToMinutes
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneMinuteInMilliseconds = 60000;

		expect(
			millisecondsToMinutes(oneMinuteInMilliseconds)
		).toBe(1);

		expect(
			millisecondsToMinutes(oneMinuteInMilliseconds * 5)
		).toBe(5);

		expect(
			millisecondsToMinutes(oneMinuteInMilliseconds * 10)
		).toBe(10);

	});

});